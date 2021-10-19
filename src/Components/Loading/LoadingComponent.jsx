import "./LoadingComponent.css";
import { selectLoading } from "../../redux/modal/modal.selector";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingComponent() {
  const show = useSelector(selectLoading);
  return show ? (
    <div className="loading-div">
      <Spinner animation="border" variant="success" />
    </div>
  ) : null;
}
