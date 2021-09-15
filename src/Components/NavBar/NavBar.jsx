import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBell } from "@fortawesome/free-solid-svg-icons";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

const otherColor = "#2ECC71";

const DropdownComponent = ({ isMobile }) => (
  <Dropdown id="dropdown-basic" color='white'>
    <Dropdown.Toggle className="dropdown-color btn-success">
      <div className="dropdown-icon">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          color={isMobile ? otherColor : "white"}
        />
        <div id="caret-down">
          <FontAwesomeIcon
            icon={faCaretDown}
            size="lg"
            color={isMobile ? otherColor : "white"}
          />
        </div>
      </div>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item href="#/action-1">Some Action</Dropdown.Item>
      <Dropdown.ItemText>Dropdown Item Text</Dropdown.ItemText>
      <Dropdown.Item disabled>Action (disabled)</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Foo Action</Dropdown.Item>
      <Dropdown.Item>Bar Action</Dropdown.Item>
      <Dropdown.Item>Quo Action</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const IconComponent = ({ isMobile }) => (
  <div className="icon-pad">
    <FontAwesomeIcon
      icon={faShoppingCart}
      color={isMobile ? otherColor : "white"}
      size="2x"
    />
    <FontAwesomeIcon
      icon={faBell}
      color={isMobile ? otherColor : "white"}
      size="2x"
    />
  </div>
);

export default function NavBar({ isMobile }) {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-dark navbar-static-top nav-back-style">
        {isMobile ? null : <DropdownComponent isMobile={isMobile} />}
        <div className="location-div">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="2x"
            color={isMobile ? otherColor : "white"}
          />
          <p className="location-text">New Delhi,India</p>
        </div>
        {isMobile ? <IconComponent isMobile={isMobile} /> : null}
        <div className="search-div">
          {isMobile ? <DropdownComponent isMobile={isMobile} /> : null}
          <input
            id="searchbar"
            className="form-control mr-2 form-size"
            type="search"
            placeholder="Search products"
            aria-label="Search"
          />
        </div>
        {isMobile ? null : <IconComponent isMobile={isMobile} />}
      </nav>
    </div>
  );
}
