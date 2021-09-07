import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBell, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-dark navbar-static-top nav-back-style">
        <button
          className="navbar-toggler nav-link dropdown-toggle nav-button-mob"
          data-toggle="dropdown"
          type="button"
          id="dropdownMenuButton"
        >
          <span className="navbar-toggler-icon"></span>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/#">
              Link
            </a>
            <a className="dropdown-item" href="/#">
              Link
            </a>
          </div>
        </button>

        <div>
          <FontAwesomeIcon className="fa-color-front-loc fa-color-front fa-2x" icon={faMapMarkerAlt} />
          <span className="navbar-text mob-color" id="heading">
            <b>New Delhi,India</b>
          </span>
        </div>

        <ul className="nav-flex-icons ">
          <li className="nav-item nav-type">
            <a className="nav-link" href="/#">
              <span>
                <FontAwesomeIcon className="fa-color-front fa-2x" icon={faBell} />
              </span>
            </a>
          </li>
        </ul>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex form-size">
          <input
            id="searchbar"
            className="form-control mr-2 "
            type="search"
            placeholder="Search products"
            aria-label="Search"
          />
        </form>
        <ul className="nav-flex-icons ">
          <li className="nav-item nav-type">
            <a className="nav-link" href="/#">
              <span>
                <FontAwesomeIcon className="fa-color fa-2x" icon={faShoppingCart} />
              </span>
            </a>
          </li>
          <li className="nav-item nav-type nav-cart-space">
            <a className="nav-link " href="/#">
              <span>
                <FontAwesomeIcon className="fa-color fa-2x" icon={faBell} />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
