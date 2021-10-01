import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import RegisterImg from "../../img/RegisterPage.jpg";
import "./RegisterPage.css";
import { useState } from "react";
import Template from "../../Components/Template/Template";

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
    <Template heading={"Register"} imageUrl={RegisterImg} alt={"Register"}>
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
        <CustomButton classNames={"btn-success btn-register btn-mob"}>
          Create Account
        </CustomButton>
        <div className="d-flex justify-content-between align-items-center">
          <a href="#!" className="text-body pass-centre text-decoration-none">
            Already have an account?
            <b className="pass-centre pass-color">Sign In</b>
          </a>
        </div>
      </div>
    </Template>
  );
}
