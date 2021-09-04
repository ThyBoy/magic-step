import LoginPage from "./Pages/Login/LoginPage";
import Home from './page/home';
import RegisterPage from "./Pages/Register/RegisterPage";
import LocationPage from "./Pages/Location/LocationPage";

import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <LoginPage />
      <RegisterPage />
      <LocationPage />
    </div>
    <Home />;
  );
}

export default App;
