import ItemComponent from "../ItemComponent/ItemComponent";
import CustomButton from "../CustomButton/CustomButton";
import "./OrderComponent.css";

export default function OrderComponent({ status, date, item }) {
  return (
    <div className="order-component">
      <h4 className="order-status">{status + " on " + date}</h4>
      <ItemComponent itemDetails={item} width={60} />
      <CustomButton classNames={"btn-success btn-register btn-sm"}>
        Rate and Review
      </CustomButton>
    </div>
  );
}
