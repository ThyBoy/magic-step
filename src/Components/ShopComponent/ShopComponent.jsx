import Coverpic from "../../img/coverpic.jpg";
import LogoImg from "../../img/Rectangle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBag,
  faSearch,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopComponent() {
  return (
    <div className="col-12 col-md-4 col-lg-4 mb-3">
      <div className="card shadow-lg  mb-5 bg-white card-border">
        <img src={Coverpic} className="card-img-top" alt="coverpic" />
        <div className="card-body">
          <div className="row card-avatar">
            <div className="col">
              <img className="img-thumbnail" width="70" src={LogoImg} alt="logo" />
            </div>
            <div className="col mt-3">
              <h5 className="card-title mt-4">
                <FontAwesomeIcon icon={faStar} />
                4.1
              </h5>
              <p className="card-title">(17 ratings) </p>
            </div>
          </div>
          <h4 className="card-text">LifeStyle Fashion</h4>
          <p className="para-size">CP,New Delhi</p>
          <div className="row">
            <div className="col-4 colum-space-first">
              <p className="prod-card">
                <FontAwesomeIcon icon={faShoppingBag} />
                56 products
              </p>
            </div>
            <div className="col-4 colum-space">
              <p className="prod-card">
                <FontAwesomeIcon icon={faSearch} />
                500+daily visits
              </p>
            </div>
            <div className="col-4 colum-space">
              <p className="prod-card">
                <FontAwesomeIcon icon={faHandshake} />
                50+daily sale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
