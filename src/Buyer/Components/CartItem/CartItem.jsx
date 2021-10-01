import "./CartItem.css";
import { useState } from "react";
import ItemComponent from "../ItemComponent/ItemComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleInc() {
    setQuantity((prev) => prev + 1);
  }

  function handleDec() {
    setQuantity((prev) => prev - 1);
  }

  return (
    <div className="cartitem-div">
      <ItemComponent itemDetails={props.details} />
      <div className="quantity-div">
        <p className="quantity-head">Quantity</p>
        <div className="chevron" onClick={handleDec}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        <p className="quantity">{quantity}</p>
        <div className="chevron" onClick={handleInc}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
      </div>
    </div>
  );
}
