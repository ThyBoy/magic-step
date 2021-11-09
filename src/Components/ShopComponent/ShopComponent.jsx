import ShopLogo from "../../img/ShopLogo.jpg";
import Coverpic from "../../img/coverpic.jpg";
import "./ShopComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBag,
  faSearch,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { requestServerAddress } from "../../env";

export default function ShopComponent({ data }) {
  const rating = data.reviews.length
    ? data.reviews.reduce((prev, curr) => prev + curr.ratings, 0) /
      data.reviews.length
    : "No Ratings";
  return (
    <div className="card shadow-lg  mb-5 bg-white card-border">
      <img
        src={
          data?.profileimg
            ? requestServerAddress + "uploads/sellerprofile/" + data.profileimg
            : Coverpic
        }
        className="card-img-top"
        alt="coverpic"
      />
      <div className="card-body">
        <div className="row card-avatar">
          <div className="col">
            <img
              className="img-thumbnail"
              width="70"
              src={data.logoImgUrl || ShopLogo}
              alt="logo"
            />
          </div>
          <div className="col mt-4" style={{ fontSize: "15px" }}>
            <h5 className="card-title">
              <FontAwesomeIcon
                icon={faStar}
                size="lg"
                color="#2ecc71"
                className="right-pad"
              />
              {rating}
            </h5>
            <p className="card-title">{`(${data.reviews.length} ratings)`} </p>
          </div>
        </div>
        <h4 className="card-text">{data.business_name}</h4>
        <p className="para-size">{`${data.city}, ${data.state}`}</p>
        <div className="row">
          <div className="col-4 colum-space-first">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faShoppingBag}
                size="2x"
                className="right-pad"
              />
              {`${data.products || "100"} products`}
            </p>
          </div>
          <div className="col-4 colum-space">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faSearch}
                size="2x"
                className="right-pad"
              />
              {`${Math.floor(data.visits || 100 / 100) * 100}+ daily visits`}
            </p>
          </div>
          <div className="col-4 colum-space">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faHandshake}
                size="2x"
                className="right-pad"
              />
              {`${Math.floor(data.sale || 100 / 10) * 10}+ daily sale`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
