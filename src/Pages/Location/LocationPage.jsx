import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import LocationImg from "../../img/Location.jpg";
import "./LocationPage.css";
import { useState } from "react";
import Template from "../../Components/Template/Template";
import { Cities, Countries, States } from "./countries";
import { useDispatch } from "react-redux";
import { changeAlertMessage, showAlert } from "../../redux/ui/ui.actions";
import { setUserLocation } from "../../redux/user/user.actions";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectLocation } from "../../redux/user/user.selectors";

export default function LocationPage() {
  const prevLocation = useSelector(selectLocation);
  const [location, setLocation] = useState({
    state: prevLocation?.state ? prevLocation.state : "",
    city: prevLocation?.city ? prevLocation.city : "",
    country: prevLocation?.country ? prevLocation.country : "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLocation() {
    if (!location.country) {
      dispatch(changeAlertMessage("Country can't be empty!"));
      dispatch(showAlert());
      return;
    }
    dispatch(setUserLocation(location));
    history.push("/");
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setLocation((state) => {
      state[name] = value;
      return state;
    });
  }

  return (
    <Template
      heading={"Select your Location"}
      imageUrl={LocationImg}
      alt={"Location"}
    >
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faGlobeAsia" }}
        name="country"
        list="country"
        handleChange={handleChange}
        label="Country"
        defaultValue={location.country}
        required
      >
        <datalist id="country">
          {Countries.map(({ name }, idx) => (
            <option value={name} key={idx}>
              {name}
            </option>
          ))}
        </datalist>
      </CustomInput>
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faMapMarked" }}
        name="state"
        list="state"
        handleChange={handleChange}
        label="State"
        defaultValue={location.state}
        required
      >
        <datalist id="state">
          {States.map((name, idx) => (
            <option value={name} key={idx}>
              {name}
            </option>
          ))}
        </datalist>
      </CustomInput>
      <CustomInput
        icon={{ showIcon: true, iconOrName: "faCity" }}
        name="city"
        list="city"
        handleChange={handleChange}
        label="City"
        defaultValue={location.city}
        required
      >
        <datalist id="city">
          {Cities.map((name, idx) => (
            <option value={name} key={idx}>
              {name}
            </option>
          ))}
        </datalist>
      </CustomInput>
      <div className="col-lg-9 text-center text-lg-start button-tab d-flex justify-content-between align-items-center flex-column">
        <CustomButton
          classNames={"btn-success btn-register"}
          onClick={handleLocation}
        >
          Get Started
        </CustomButton>
      </div>
    </Template>
  );
}
