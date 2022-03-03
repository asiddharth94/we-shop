import { createSelector } from "reselect";

// the function receives the whole state and returns a slice of it
const selectCart = (state) => state.cart;

/* createSelector - 
first arg is [] array of selectors (note - we can also have them as seperate args)
e.g. ([one, two], () => {}) OR (one, two, () => {})
second arg is a function which takes in the values returned by input selectors in the same order,
as defined in the array in first arg */

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.cartVisibility
);
