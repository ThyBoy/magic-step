import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Template from "../../Components/Template/Template";
import LoginImg from "../../img/Login.jpg";
import { requestServerAddress } from "../../env";
import { FormCheck } from "react-bootstrap";
import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  showModal,
  showLoading,
  changeNotification,
  hideLoading,
} from "../../redux/modal/modal.actions";
import { setCurrentUser, setUnapproved } from "../../redux/user/user.actions";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { value, name } = event.target;
    setCredentials((state) => {
      state[name] = value;
      return state;
    });
  }

  function showNotification(str) {
    dispatch(changeNotification(str));
    dispatch(showModal());
  }

  function handleShowPassword(event) {
    setShowPassword(event.target.checked);
  }

  async function handleSubmit() {
    if (!credentials.email || !credentials.password) {
      showNotification("Email or Password can not be empty!!");
      return;
    }
    if (credentials.password.length < 6) {
      showNotification("Password must be atleast 6 characters.");
      return;
    }
    dispatch(showLoading());
    try {
      const user = await axios.post(requestServerAddress + "user/login", {
        userEmailPhone: credentials.email,
        password: credentials.password,
      });
      dispatch(
        setCurrentUser({
          name: user.data.user.username,
          email: user.data.user.email,
          phone: user.data.user.phone,
          roll: user.data.user.roll,
          token: user.data.token,
        })
      );
      dispatch(setUnapproved(user.data.user.status === "unapproved"));
      console.log(user);
    } catch (error) {
      if (error.response.data?.msg) {
        showNotification(error.response.data.msg);
      } else if (error.response.data?.error) {
        showNotification(error.response.data.error);
      } else {
        showNotification("An Error Occurred");
      }
      console.log(error.response);
    }
    dispatch(hideLoading());
  }

  return (
    <Template heading={"Welcome"} imageUrl={LoginImg} alt={"Login"}>
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faEnvelope" }}
        name="email"
        type="email"
        handleChange={handleChange}
        label="Email/Phone Number"
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
      <div className="col-lg-9 text-center text-lg-start button-tab d-flex justify-content-between align-items-center flex-column">
        <FormCheck
          label="Show Password"
          onChange={handleShowPassword}
          checked={showPassword}
        />
        <CustomButton
          classNames={"btn-outline-success btn-login"}
          onClick={handleSubmit}
        >
          Sign In
        </CustomButton>
        <a
          href="#!"
          className="text-body pass-centre text-decoration-none font-weight-bold"
        >
          Forgot password?
        </a>
        <Link to="/register" style={{ cursor: "default" }}>
          <CustomButton classNames={"btn-success btn-register"}>
            Create Account
          </CustomButton>
        </Link>
        <div className="verify-cancel">
          <div style={{ fontWeight: "500" }}>Sign In Later?</div>
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
