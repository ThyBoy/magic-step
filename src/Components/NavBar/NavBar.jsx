import "./NavBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBell } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const otherColor = "#2ECC71";

function OffcanvasComponent({ isMobile }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dropdown-color" onClick={handleShow}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          color={isMobile ? otherColor : "white"}
        />
      </div>

      <Offcanvas show={show} onHide={handleClose} scroll>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="menu-head">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu">
            <p className="menu-items">About</p>
            <p className="menu-items">Services</p>
            <p className="menu-items">Client</p>
            <p className="menu-items">Contact</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const IconComponent = ({ isMobile }) => (
  <div className="icon-pad">
    <Link to="/cart" style={{ cursor: "pointer" }}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        color={isMobile ? otherColor : "white"}
        size="2x"
      />
    </Link>
    <FontAwesomeIcon
      icon={faBell}
      color={isMobile ? otherColor : "white"}
      size="2x"
    />
  </div>
);

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-dark navbar-static-top nav-back-style">
        {isMobile ? null : <OffcanvasComponent isMobile={isMobile} />}
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
          {isMobile ? <OffcanvasComponent isMobile={isMobile} /> : null}
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
