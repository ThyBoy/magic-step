import "./MyOrdersPage.css";
import OrderImg from "../../img/SuccessfulPurchase.svg";
import ItemImg from "../../img/itemImg.jpg";
import OrderComponent from "../../Components/OrderComponent/OrderComponent";
import NavBar from "../../Components/NavBar/NavBar";

const orders = [
  {
    status: "Delivered",
    date: "1 July,2021",
    item: {
      imgUrl: ItemImg,
      itemName: "Apple iphone 12",
      price: 999,
      properties: "Red",
      seller: "By Raja Electronics",
    },
  },
  {
    status: "Arriving",
    date: "1 September,2021",
    item: {
      imgUrl: ItemImg,
      itemName: "Apple iphone 12",
      price: 999,
      properties: "Red",
      seller: "By Raja Electronics",
    },
  },
  {
    status: "Delivered",
    date: "1 June,2021",
    item: {
      imgUrl: ItemImg,
      itemName: "Apple iphone 12",
      price: 999,
      properties: "Red",
      seller: "By Raja Electronics",
    },
  },
];

export default function MyOrdersPage() {
  return (
    <>
      <NavBar />
      <div className="my-orders">
        <h2>My Orders</h2>
        <div className="row d-flex justify-content-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 order-img-div">
            <img className="order-img" src={OrderImg} alt={"My Order"} />
          </div>
          <div className="col-md-8 col-lg-6 all-orders">
            <div className="order-container">
              {orders.map((order, idx) => (
                <OrderComponent key={idx} {...order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
