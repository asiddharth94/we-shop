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

export const clearItem = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
