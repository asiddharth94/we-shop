import { CartActionTypes } from "./cart.types";

// NOTE - payload is an optional param for Action
export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

// action to remove (or decrease) item's quantity from the cart
export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

// action to clear (completely remove) item from the cart
export const clearItem = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
