import CustomButton from "../../Components/CustomButton/CustomButton";
import "./VerificationPage.css";
import { requestServerAddress } from "../../env";
import { useDispatch } from "react-redux";
import {
  changeAlertMessage,
  hideLoading,
  showLoading,
  showAlert,
} from "../../redux/ui/ui.actions";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/user/user.selectors";
import { resetCurrentUser, setUnapproved } from "../../redux/user/user.actions";

export default function VerificationPage() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  async function handleVerified() {
    dispatch(showLoading());
    try {
      const response = await axios.get(requestServerAddress + "user", {
        headers: {
          "x-auth-token": token,
        },
      });
      console.log(response, response.data);
      dispatch(setUnapproved(false));
    } catch (error) {
      console.log(error);
      if (error.response.data?.error) {
        dispatch(changeAlertMessage(error.response.data.error));
        dispatch(showAlert());
      } else {
        dispatch(changeAlertMessage("An Error Occurred"));
        dispatch(showAlert());
      }
    }
    dispatch(hideLoading());
  }

  function handleSignOut() {
    dispatch(showLoading());
    dispatch(resetCurrentUser());
    dispatch(hideLoading());
  }

  async function handleResend() {
    dispatch(showLoading());
    try {
      const response = await axios.get(
        requestServerAddress + "user/getVerifyMail",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(response, response.data);
      dispatch(changeAlertMessage("Mail Send"));
      dispatch(showAlert());
    } catch (error) {
      console.log(error.response);
      if (error.response.data?.error) {
        dispatch(changeAlertMessage(error.response.data.error));
        dispatch(showAlert());
      } else {
        dispatch(changeAlertMessage("An Error Occurred"));
        dispatch(showAlert());
      }
    }
    dispatch(hideLoading());
  }

  return (
    <div className="verify-page">
      <h2 className="verify-head">Confirm your email address</h2>
      <p className="verify-content">
        We have sent an email with a confirmation link to your email address. In
        order to complete the sign-up process, please click the confirmation
        link.
      </p>
      <p className="verify-content">
        If you do not receive a confirmation email, please check your spam
        folder. Also, please verify that you entered a valid email address in
        our sign-up form.
      </p>
      <div className="verify-btn">
        <CustomButton
          classNames={"btn-success btn-register btn-sm btn-verified"}
          onClick={handleVerified}
        >
          Verified !!
        </CustomButton>
        <div className="verify-cancel">
          <div style={{ fontWeight: "500" }}>Verify another time?</div>
          <div className="verify-signout" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
        <div className="verify-cancel">
          <div style={{ fontWeight: "500" }}>Did not receive?</div>
          <div className="verify-signout" onClick={handleResend}>
            Resend
          </div>
        </div>
      </div>
    </div>
  );
}
