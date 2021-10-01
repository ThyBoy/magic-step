import CartItem from "../../Components/CartItem/CartItem";
import "./CartPage.css";
import ItemImg from "../../img/itemImg.jpg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import OrderDetails from "../../Components/OrderDetails/OrderDetails";

const items = [
  {
    imgUrl: ItemImg,
    itemName: "Apple iphone 12",
    price: 999,
    properties: "Red",
    seller: "By Raja Electronics",
    quantity: 2,
    key: 1,
  },
  {
    imgUrl: ItemImg,
    itemName: "Apple iphone 12",
    price: 999,
    properties: "Red",
    seller: "By Raja Electronics",
    quantity: 5,
    key: 2,
  },
];

export default function CartPage() {
  return (
    <div className="row p-5 cart-page">
      <div className="col-md-7 cart-div">
        <h2 className="mb-3">My Cart</h2>
        {items.map(({ quantity, key, ...other }) => (
          <CartItem quantity={quantity} details={other} key={key} />
        ))}
        <div className=" mt-4 checkout-btn">
          <CustomButton classNames={"btn-success btn-register btn-sm"}>
            Checkout
          </CustomButton>
        </div>
      </div>
      <OrderDetails />
    </div>
  );
}
