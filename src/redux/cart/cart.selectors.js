import { createSelector } from "reselect";

//input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedValue, cartItem, i) => accumulatedValue + cartItem.quantity,
      0
    )
);
