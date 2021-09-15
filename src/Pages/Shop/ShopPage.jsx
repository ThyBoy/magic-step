import "./ShopPage.css";
import ShopImage from "../../img/Shopmain.jpg";
import ShopLogo from "../../img/shoplogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faStar,
  faUndoAlt,
  faShoppingBag,
  faSearch,
  faHandshake,
  faPhoneAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../Components/CustomButton/CustomButton";

const Details = () => (
  <div>
    <div className="detail">
      <div className="right-pad">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
      About
    </div>
    <div className="detail">
      <div className="right-pad">
        <FontAwesomeIcon icon={faUndoAlt} />
      </div>
      Return Policy
    </div>
    <div className="detail">
      <div className="right-pad">
        <FontAwesomeIcon icon={faStar} />
      </div>
      Reviews
    </div>
  </div>
);

export default function ShopPage({ isMobile }) {
  return (
    <div className="split-container">
      <div className="container-left">
        <Details />
        <h4 className="overview">Overview</h4>
        <div className="detail">
          <div className="right-pad">
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          56 Products
        </div>
        <div className="detail">
          <div className="right-pad">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          500+ Daily Visits
        </div>
        <div className="detail">
          <div className="right-pad">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          50+ Daily Sale
        </div>
      </div>
      <div className="container-right">
        <img className="container-img" src={ShopImage} alt="main" />
        <div className="logo-pos">
          <img className="logo-main" src={ShopLogo} alt="logo" />
        </div>
        <div className="content">
          <h4 className="card-text">LifeStyle Fashion</h4>
          <p className="para-size">CP, New Delhi</p>
          {isMobile ? <Details /> : null}
          <div className="content-button">
            <CustomButton classNames={"btn-success btn-register btn-call"}>
              <div className="btn-row">
                <div className="right-pad">
                  <FontAwesomeIcon icon={faPhoneAlt} color="white" />
                </div>
                Call
              </div>
            </CustomButton>
            <div className="left-pad">
              <CustomButton classNames={"btn-success btn-register btn-message"}>
                <div className="btn-row">
                  <div className="right-pad">
                    <FontAwesomeIcon icon={faPaperPlane} color="white" />
                  </div>
                  Message
                </div>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
