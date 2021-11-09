import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import RegisterImg from "../../img/RegisterPage.jpg";
import { requestServerAddress } from "../../env";
import "./RegisterPage.css";
import { useEffect, useState } from "react";
import Template from "../../Components/Template/Template";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FormCheck } from "react-bootstrap";
import { showLoading, hideLoading } from "../../redux/ui/ui.actions";
import { setCurrentUser } from "../../redux/user/user.actions";
import { showAlertThunk } from "../../redux/ui/ui.utils";

export default function RegisterPage() {
  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    password: "",
    retypePassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setMatchPassword(userInputs.password === userInputs.retypePassword);
  }, [userInputs]);

  function handleShowPassword(event) {
    setShowPassword(event.target.checked);
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setUserInputs((state) => {
      state[name] = value;
      return { ...state };
    });
  }

  function ValidateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  async function handleSubmit() {
    if (
      !userInputs.name ||
      !userInputs.email ||
      !userInputs.password ||
      !userInputs.phone ||
      !userInputs.retypePassword
    ) {
      dispatch(showAlertThunk("Details can not be empty!!"));
      return;
    }
    if (!ValidateEmail(userInputs.email)) {
      dispatch(showAlertThunk("Not a Valid Email!!"));
      return;
    }
    if (userInputs.password.length < 6) {
      dispatch(showAlertThunk("Password must be atleast 6 characters."));
      return;
    }
    if (userInputs.password !== userInputs.retypePassword) {
      dispatch(showAlertThunk("Password does not match."));
      return;
    }
    dispatch(showLoading());
    try {
      const user = await axios.post(requestServerAddress + "user/register", {
        password: userInputs.password,
        confpassword: userInputs.retypePassword,
        username: userInputs.name,
        email: userInputs.email,
        phone: userInputs.phone,
      });
      dispatch(
        setCurrentUser({
          name: userInputs.name,
          email: userInputs.email,
          phone: userInputs.phone,
          roll: "basic",
          token: user.data.token,
        })
      );
      console.log(user);
    } catch (error) {
      if (error.response.data?.msg) {
        dispatch(showAlertThunk(error.response.data.msg));
      } else if (error.response.data?.error) {
        dispatch(showAlertThunk(error.response.data.error));
      } else {
        dispatch(showAlertThunk("An Error Occurred"));
      }
      console.log(error.response);
    }
    dispatch(hideLoading());
  }

  return (
    <Template heading={"Register"} imageUrl={RegisterImg} alt={"Register"}>
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faUser" }}
        name="name"
        type="text"
        handleChange={handleChange}
        label="Name"
        required
      />
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faEnvelope" }}
        name="email"
        type="email"
        handleChange={handleChange}
        label="Email"
        required
      />
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faPhoneAlt" }}
        name="phone"
        type="number"
        handleChange={handleChange}
        label="Phone Number"
        required
      />
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faUnlockAlt" }}
        name="password"
        type={showPassword ? "text" : "password"}
        handleChange={handleChange}
        label="Password"
        required
      />
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faUnlockAlt" }}
        name="retypePassword"
        type="password"
        handleChange={handleChange}
        label="Retype Password"
        required
      />

      <div className="col-lg-9 text-center text-lg-start button-tab tab-mob d-flex justify-content-between align-items-center flex-column">
        <div style={{ color: "red", paddingBottom: "20px", height: "50px" }}>
          {matchPassword ? null : "Passwords does not match!!"}
        </div>
        <FormCheck
          label="Show Password"
          onChange={handleShowPassword}
          checked={showPassword}
        />
        <CustomButton
          classNames={"btn-success btn-register btn-mob"}
          onClick={handleSubmit}
        >
          Create Account
        </CustomButton>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-body pass-centre text-decoration-none">
            Already have an account?
            <Link
              to="/login"
              className="verify-signout"
              style={{ textDecoration: "none" }}
            >
              Sign In
            </Link>
          </div>
        </div>
        <div
          className="verify-cancel"
          style={{ fontWeight: "500", paddingTop: "8px" }}
        >
          <div style={{ fontWeight: "500" }}>Register Later?</div>
          <Link
            to="/"
            className="verify-signout"
            style={{ textDecoration: "none" }}
          >
            Skip
          </Link>
        </div>
      </div>
    </Template>
  );
}
