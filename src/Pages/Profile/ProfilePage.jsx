import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faShoppingCart,
  faMapMarkerAlt,
  faInfoCircle,
  faSignOutAlt,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../img/ProfileImg.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import NavBar from "../../Components/NavBar/NavBar";

export default function ProfilePage() {
  return (
    <>
      <NavBar />
      <div className="profile-show">
        <p className="profile-head">My Account</p>
        <div className="profile-image">
          <div className="image-pad">
            <img src={ProfileImg} alt="profileImg" />
            <p className="profile-name">Raj Sharma</p>
          </div>
          <div className="change-icon">
            <FontAwesomeIcon icon={faPen} color="#E4E4E4" />
          </div>
        </div>
      </div>
      <div className="profile-content">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="right-pad">
                <FontAwesomeIcon icon={faShoppingCart} color="#495057" />
              </div>
              My Order
            </Accordion.Header>
            <Accordion.Body>My Orders</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="right-pad">
                <FontAwesomeIcon icon={faMapMarkerAlt} color="#495057" />
              </div>
              My Address
            </Accordion.Header>
            <Accordion.Body>My Address</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="right-pad">
                <FontAwesomeIcon icon={faInfoCircle} color="#495057" />
              </div>
              My Info
            </Accordion.Header>
            <Accordion.Body>My Info</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="right-pad">
                <FontAwesomeIcon icon={faShareSquare} color="#495057" />
              </div>
              Share This App
            </Accordion.Header>
            <Accordion.Body>Share This App</Accordion.Body>
          </Accordion.Item>
          <Card>
            <Card.Header>
              <div className="log-out">
                <div className="logout-icon">
                  <FontAwesomeIcon icon={faSignOutAlt} color="#495057" />
                </div>
                Log Out
              </div>
            </Card.Header>
          </Card>
        </Accordion>
      </div>
    </>
  );
}
