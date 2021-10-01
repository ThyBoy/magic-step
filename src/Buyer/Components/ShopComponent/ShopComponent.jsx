import "./ShopComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBag,
  faSearch,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopComponent({ data }) {
  return (
    <div className="card shadow-lg  mb-5 bg-white card-border">
      <img src={data.coverImgUrl} className="card-img-top" alt="coverpic" />
      <div className="card-body">
        <div className="row card-avatar">
          <div className="col">
            <img
              className="img-thumbnail"
              width="70"
              src={data.logoImgUrl}
              alt="logo"
            />
          </div>
          <div className="col mt-4">
            <h5 className="card-title">
              <FontAwesomeIcon icon={faStar} size="lg" className="right-pad" />
              {data.rating}
            </h5>
            <p className="card-title">{`(${data.ratingsCount} ratings)`} </p>
          </div>
        </div>
        <h4 className="card-text">{data.name}</h4>
        <p className="para-size">{data.location}</p>
        <div className="row">
          <div className="col-4 colum-space-first">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faShoppingBag}
                size="2x"
                className="right-pad"
              />
              {`${data.products} products`}
            </p>
          </div>
          <div className="col-4 colum-space">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faSearch}
                size="2x"
                className="right-pad"
              />
              {`${Math.floor(data.visits / 100) * 100}+ daily visits`}
            </p>
          </div>
          <div className="col-4 colum-space">
            <p className="prod-card">
              <FontAwesomeIcon
                icon={faHandshake}
                size="2x"
                className="right-pad"
              />
              {`${Math.floor(data.sale / 10) * 10}+ daily sale`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
