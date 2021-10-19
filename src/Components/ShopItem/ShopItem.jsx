import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShopItem.css";

export default function ShopItem(props) {
  const { imgUrl, name, disPrice, price, rating } = props.itemDetails;
  return (
    <div className="col-6 col-lg-3 col-md-3">
      <img src={imgUrl} alt={name} />
      <h6 className="pt-1 pb-1">{name}</h6>
      <h4>
        <span className="font-weight-bold">{"$" + disPrice}</span>
        <span className="text-secondary  text-decoration-line-through">
          {"$" + price}
        </span>
      </h4>
      <h5 className="pt-1 pb-2">
        <FontAwesomeIcon icon={faStar} color="#12a14e" />
        {rating}
      </h5>
    </div>
  );
}
