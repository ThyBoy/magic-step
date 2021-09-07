import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Template from "../../Components/Template/Template";
import LoginImg from "../../img/Login.jpg";
import "./LoginPage.css";
import { useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setCredentials((state) => {
      state[name] = value;
      return state;
    });
    console.log(credentials);
  }

  return (
    <Template heading={"Welcome"} imageUrl={LoginImg} alt={"Login"}>
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faEnvelope" }}
        name="email"
        type="email"
        handleChange={handleChange}
        label="Enter a valid email address"
        required
      />
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faUnlockAlt" }}
        name="password"
        type="password"
        handleChange={handleChange}
        label="Enter password"
        required
      />
      <div className="col-lg-9 text-center text-lg-start button-tab d-flex justify-content-between align-items-center flex-column">
        <CustomButton classNames={"btn-outline-success btn-login"}>
          Sign In
        </CustomButton>
        <a
          href="#!"
          className="text-body pass-centre text-decoration-none font-weight-bold"
        >
          Forgot password?
        </a>
        <CustomButton classNames={"btn-success btn-register"}>
          Create Account
        </CustomButton>
      </div>
    </Template>
  );
}
