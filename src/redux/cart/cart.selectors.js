import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemsCount = createSelector(
  [selectCart],
  (cart) => cart.itemCount
);

export const selectCartTotal = createSelector(
  [selectCart],
  (cart) => cart.price
);
