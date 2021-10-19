import { cartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  itemCount: 0,
  price: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        itemCount: state.itemCount + 1,
        price: state.price + action.payload.price,
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
        itemCount: state.itemCount - action.payload.quantity,
        price: state.price - action.payload.quantity * action.payload.price,
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        itemCount: state.itemCount - 1,
        price: state.price - action.payload.price,
      };

    default:
      return state;
  }
};

export default cartReducer;
