import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import RegisterImg from "../../img/RegisterPage.jpg";
import "./RegisterPage.css";
import { useState } from "react";

export default function RegisterPage() {
  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    phone: 0,
    password: "",
    retypePassword: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserInputs((state) => {
      state[name] = value;
      return state;
    });
    console.log(userInputs);
  }

  return (
    <section id="register" className="vh-90">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 log-img-sec">
            <img className="register-img" src={RegisterImg} alt="Register" />
          </div>
          <div className="col-md-8 col-lg-6 offset-xl-1 align-media align-image">
            <div className="card card-style w-80 width-mob">
              <div className="card-body p-0 card-align">
                <form className="login-container">
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mob-top-pad">
                    <p className="lead fw-normal mb-0 me-3 login-mess">
                      <b> Create Account </b>
                    </p>
                  </div>
                  <CustomInput
                    icon={{ showIcon: true, iconOrName: "faUser" }}
                    name="name"
                    type="text"
                    handleChange={handleChange}
                    label="Enter your name"
                    required
                  />
                  <CustomInput
                    icon={{ showIcon: true, iconOrName: "faEnvelope" }}
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    label="Enter a valid email address"
                    required
                  />
                  <CustomInput
                    icon={{ showIcon: true, iconOrName: "faPhoneAlt" }}
                    name="phone"
                    type="number"
                    handleChange={handleChange}
                    label="Enter a valid phone number"
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
                  <CustomInput
                    icon={{ showIcon: true, iconOrName: "faUnlockAlt" }}
                    name="retypePassword"
                    type="password"
                    handleChange={handleChange}
                    label="Retype your Password"
                    required
                  />

                  <div className="col-lg-9 text-center text-lg-start button-tab tab-mob d-flex justify-content-between align-items-center flex-column">
                    <CustomButton
                      classNames={"btn-success btn-register btn-mob"}
                    >
                      Create Account
                    </CustomButton>
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        href="#!"
                        className="text-body pass-centre text-decoration-none"
                      >
                        Already have an account?
                        <b className="pass-centre pass-color">Sign In</b>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
