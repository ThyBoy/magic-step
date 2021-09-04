import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUnlockAlt,
  faUser,
  faPhoneAlt,
  faGlobeAsia,
  faMapMarked,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import "./CustomInput.css";

export default function CustomInput({
  children,
  handleChange,
  type,
  list,
  label,
  icon,
  ...other
}) {
  const icons = {
    faEnvelope: faEnvelope,
    faUnlockAlt: faUnlockAlt,
    faUser: faUser,
    faPhoneAlt: faPhoneAlt,
    faGlobeAsia: faGlobeAsia,
    faMapMarked: faMapMarked,
    faCity: faCity,
  };
  return (
    <div className="form-outline mb-4">
      <div className="row row-class">
        <div className="col-lg-1 space-up ">
          {icon.showIcon ? (
            <FontAwesomeIcon icon={icons[icon.iconOrName]} />
          ) : (
            <p>{icon.iconOrName}</p>
          )}
        </div>
        <div className="col-lg-8 space-left">
          {type ? (
            <input
              type={type}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder={label}
              {...other}
            />
          ) : (
            <input
              list={list}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder={label}
              {...other}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
