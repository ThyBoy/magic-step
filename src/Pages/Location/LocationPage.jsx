import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import LocationImg from "../../img/Location.jpg";
import "./LocationPage.css";
import { useState } from "react";

export default function LocationPage() {
  const [location, setLocation] = useState({
    state: "",
    city: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setLocation((state) => {
      state[name] = value;
      return state;
    });
    console.log(location);
  }

  return (
    <section id="location" className="vh-90">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 log-img-sec">
            <img className="login-img" src={LocationImg} alt="LocationImage" />
          </div>
          <div className="col-md-8 col-lg-6 offset-xl-1 align-media">
            <form className="login-container">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3 login-mess">
                  Select your location
                </p>
              </div>
              <CustomInput
                icon={{ showIcon: true, iconOrName: "faMapMarked" }}
                name="state"
                list="state"
                handleChange={handleChange}
                label="State"
                required
              >
                <datalist id="state">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </datalist>
              </CustomInput>
              <CustomInput
                icon={{ showIcon: true, iconOrName: "faCity" }}
                name="city"
                list="city"
                handleChange={handleChange}
                label="City"
                required
              >
                <datalist id="city">
                  <option value="Noida">Noida</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Chennai">Chennai</option>
                </datalist>
              </CustomInput>
              <div className="col-lg-9 text-center text-lg-start button-tab d-flex justify-content-between align-items-center flex-column">
                <CustomButton classNames={"btn-success btn-register"}>
                  Get Started
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
