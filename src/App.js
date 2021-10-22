import HomePage from "./Pages/Home/HomePage";
import ShopList from "./Pages/ShopList/ShopList";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import LocationPage from "./Pages/Location/LocationPage";
//import ShopPage from "./Pages/Shop/ShopPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import CartPage from "./Pages/Cart/CartPage";
//import OrderPage from "./Pages/Order/OrderPage";
import MyOrdersPage from "./Pages/MyOrders/MyOrdersPage";
import { Redirect, Route, Switch } from "react-router";
import NotificationComponent from "./Components/Notification/NotificationComponent";
import LoadingComponent from "./Components/Loading/LoadingComponent";
import VerificationPage from "./Pages/Verification/VerificationPage";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserStatus,
} from "./redux/user/user.selectors";
import ProductPage from "./Pages/Product/ProductPage";

const NoMatch = () => <div>No Match Found</div>;

function App() {
  const user = useSelector(selectCurrentUser);
  const unapproved = useSelector(selectUserStatus);
  return (
    <>
      <NotificationComponent />
      <LoadingComponent />
      <Route path="/">
        {user && unapproved ? (
          <VerificationPage />
        ) : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login">
              {user ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route exact path="/shops" component={ShopList} />
            <Route path="/register">
              {user ? <Redirect to="/" /> : <RegisterPage />}
            </Route>
            <Route exact path="/location" component={LocationPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/myprofile" component={ProfilePage} />
            <Route exact path="/myorders" component={MyOrdersPage} />
            <Route exact path="/product" component={ProductPage} />
            <Route path="*" component={NoMatch} />
          </Switch>
        )}
      </Route>
    </>
  );
}

export default App;
