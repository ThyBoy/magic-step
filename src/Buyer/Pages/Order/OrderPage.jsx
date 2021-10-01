import CustomButton from "../../Components/CustomButton/CustomButton";
import ItemComponent from "../../Components/ItemComponent/ItemComponent";
import ItemImg from "../../img/itemImg.jpg";
import OrderDetails from "../../Components/OrderDetails/OrderDetails";
import "./OrderPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const item = {
  imgUrl: ItemImg,
  itemName: "Apple iphone 12",
  price: 999,
  properties: "Red",
  seller: "By Raja Electronics",
};

export default function OrderPage() {
  return (
    <div className="row p-5 cart-page">
      <div className="col-md-7 order-div">
        <h2 className="mb-3">Order Details</h2>
        <h5 className="placed-on">Placed on Jun 1, 2021</h5>
        <h5 className="arriving-on">Arriving on 1 July, 2021</h5>
        <ItemComponent itemDetails={item} width={60} />
        <div className=" mt-4 order-btn">
          <CustomButton classNames={"btn-success btn-register btn-sm"}>
            Cancel Order
          </CustomButton>
          <CustomButton classNames={"btn-success btn-register btn-sm"}>
            Need Help
          </CustomButton>
        </div>
      </div>
      <OrderDetails>
        <h5 className="details-head">ORDER ID #56580AS90</h5>
        <a className="invoice-link" href="/#">
          View Invoice
          <div style={{ paddingLeft: "10px" }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </a>
        <hr />
      </OrderDetails>
    </div>
  );
}
