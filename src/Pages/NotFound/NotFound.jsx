import { useHistory } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const history = useHistory();

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>oops!</h1>
        <h2>Error 404 : Page Not Found</h2>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          go back
        </button>
      </div>
    </div>
  );
}
