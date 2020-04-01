import { createSelector } from "reselect";

const selectCard = state => state.cart;

export const selectCartItems = createSelector(
  [selectCard],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);
