import { useState, useLayoutEffect } from "react";

import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/Home/HomePage";
import ShopList from "./Pages/ShopList/ShopList";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import LocationPage from "./Pages/Location/LocationPage";
import ShopPage from "./Pages/Shop/ShopPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import CartPage from "./Pages/Cart/CartPage";
import OrderPage from "./Pages/Order/OrderPage";
import MyOrdersPage from "./Pages/MyOrders/MyOrdersPage";

function Buyer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useLayoutEffect(() => {
    function updateWidth() {
      setIsMobile(window.innerWidth < 960);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div>
      <NavBar isMobile={isMobile} />
      <MyOrdersPage />
      <OrderPage />
      <CartPage />
      <ProfilePage />
      <ShopPage isMobile={isMobile} />
      <ShopList />
      <HomePage isMobile={isMobile} />
      <LocationPage />
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default Buyer;
