import { CartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

// NOTE - payload is an optional param for Action
