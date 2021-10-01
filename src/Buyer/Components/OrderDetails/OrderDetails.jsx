import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMapMarkerAlt,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import "./OrderDetails.css";

export default function OrderDetails(props) {
  return (
    <div className="col-md-4 order-details">
      {props.children}
      <h4 className="details-head">Order Type</h4>
      <div className="delivery-details">
        <FontAwesomeIcon icon={faTruckMoving} size="lg" />
        <h6 className="left-pad">Home Delivery</h6>
      </div>
      <hr />
      <div className="address-head">
        <div className="address-icons">
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#2EEC71" size="2x" />
        </div>
        <div className="address-details">
          <h5 className="details-head"> Delivery Address </h5>
          <h5 className="address-name"> Mriganka Baruah </h5>
          <h6 className="address-phone">+911234567890</h6>
          <h6 className="address-all">
            House no 15 <br /> Near Greenland <br /> North Lakhimpur <br />
            Assam <br /> India <br />
          </h6>
        </div>
      </div>
      <hr />
      <h5 className="details-head">Payment Method</h5>
      <div className="d-flex">
        <FontAwesomeIcon icon={faCreditCard} size="lg" />
        <h6 className="left-pad">**** **** **** 1234</h6>
      </div>
      <hr />
      <h5 className="details-head">Order Details</h5>
      <div className="price-table">
        <div className="first-col">
          <h6>Subtotal</h6>
          <h6>Shipping Cost</h6>
          <h6 className="price-total">Total</h6>
        </div>
        <div className="second-col">
          <h6>$999</h6>
          <h6>$99</h6>
          <h6 className="price-total">$1098</h6>
        </div>
      </div>
    </div>
  );
}
