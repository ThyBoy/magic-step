import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig, rootReducer);
