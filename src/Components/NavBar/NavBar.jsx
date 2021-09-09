import "./NavBar.css";
import { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBell } from "@fortawesome/free-solid-svg-icons";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownToggle } from "reactstrap";
import { DropdownMenu, DropdownItem } from "reactstrap";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const otherColor = "#2ECC71";

  useLayoutEffect(() => {
    function updateWidth() {
      setIsMobile(window.innerWidth < 960);
      console.log(isMobile);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  });

  function handleToggle() {
    setDropdownOpen((prevState) => !prevState);
  }

  const DropdownComponent = ({ isMobile }) => (
    <Dropdown isOpen={dropdownOpen} toggle={handleToggle}>
      <DropdownToggle className="dropdown-color" color='blue'>
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
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem href="#/action-1">Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
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
