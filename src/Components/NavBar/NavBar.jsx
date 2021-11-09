import "./NavBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBell,
  faSignInAlt,
  faChevronRight,
  faPlusSquare,
  faAngleDoubleRight,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  hideLoading,
  showLoading,
  showNotifications,
} from "../../redux/ui/ui.actions";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UserImg from "../../img/user.svg";
import {
  selectCurrentUser,
  selectLocation,
} from "../../redux/user/user.selectors";
import { resetCurrentUser } from "../../redux/user/user.actions";
import { showAlertThunk } from "../../redux/ui/ui.utils";
import { useHistory } from "react-router";

const otherColor = "#2ECC71";

function OffcanvasComponent({ isMobile }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(selectCurrentUser);

  function handleSignOut() {
    dispatch(showLoading());
    dispatch(resetCurrentUser());
    dispatch(showAlertThunk("Signed Out Successfully!"));
    history.push("/login");
    dispatch(hideLoading());
  }

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
        <Offcanvas.Header className="menu-off-header" closeButton>
          <Offcanvas.Title className="menu-head">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "10px 0px" }}>
          <Card className="off-card">
            <Card className="off-card-user">
              <div
                className="first-circle-div"
                onClick={() => {
                  history.push("/myprofile");
                }}
              >
                <img className="off-user-img" src={UserImg} alt="user" />
              </div>
              <br />
              <h5 className="off-user-name">
                {user ? user.name : "Not Logged In!!"}
              </h5>
            </Card>
            <Card className="off-user-options">
              {user ? (
                <Button
                  variant="light"
                  className="off-option"
                  onClick={handleSignOut}
                >
                  <div style={{ color: "#2ecc71" }}>
                    <FontAwesomeIcon icon={faSignOutAlt} color="#2ecc71" />
                    <span style={{ paddingLeft: "10px" }} />
                    Sign Out
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} color="#2ecc71" />
                </Button>
              ) : (
                <>
                  <Button
                    variant="light"
                    className="off-option"
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    <div style={{ color: "#2ecc71" }}>
                      <FontAwesomeIcon icon={faSignInAlt} color="#2ecc71" />
                      <span style={{ paddingLeft: "10px" }} />
                      Sign In
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} color="#2ecc71" />
                  </Button>
                  <Button
                    variant="light"
                    className="off-option"
                    onClick={() => {
                      history.push("/register");
                    }}
                  >
                    <div style={{ color: "#2ecc71" }}>
                      <FontAwesomeIcon icon={faPlusSquare} color="#2ecc71" />
                      <span style={{ paddingLeft: "10px" }} />
                      Register
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} color="#2ecc71" />
                  </Button>
                </>
              )}
            </Card>
            <Card className="off-user-about">
              {["About", "Services", "Client", "Contact"].map((value, idx) => (
                <Button key={idx} variant="light" className="off-option">
                  <div style={{ color: "#2ecc71" }}>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      color="#2ecc71"
                    />
                    <span style={{ paddingLeft: "10px" }} />
                    {value}
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} color="#2ecc71" />
                </Button>
              ))}
            </Card>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function IconComponent({ isMobile }) {
  const dispatch = useDispatch();
  return (
    <div className="icon-pad">
      <Link to="/cart" style={{ cursor: "pointer" }}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          color={isMobile ? otherColor : "white"}
          size="2x"
        />
      </Link>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(showNotifications())}
      >
        <FontAwesomeIcon
          icon={faBell}
          color={isMobile ? otherColor : "white"}
          size="2x"
        />
      </div>
    </div>
  );
}

export default function NavBar() {
  const location = useSelector(selectLocation);
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-dark navbar-static-top nav-back-style">
        {isMobile ? null : <OffcanvasComponent isMobile={isMobile} />}
        <Link to="/location" style={{ textDecoration: "none" }}>
          <div className="location-div">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="2x"
              color={isMobile ? otherColor : "white"}
            />
            <p className="location-text">
              {!location
                ? "Choose Location"
                : location?.city
                ? `${location.city}, ${location.country}`
                : location?.state
                ? `${location.state}, ${location.country}`
                : location.country}
            </p>
          </div>
        </Link>
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
