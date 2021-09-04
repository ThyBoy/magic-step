import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
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
    <section id="login" className="vh-90">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 log-img-sec">
            <img className="login-img" src={LoginImg} alt="LoginImage" />
          </div>
          <div className="col-md-8 col-lg-6 offset-xl-1 align-media">
            <form className="login-container">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3 login-mess">Welcome</p>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
