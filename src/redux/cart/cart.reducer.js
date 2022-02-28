import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  cartVisibility: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartVisibility: !state.cartVisibility,
      };

    default:
      return state;
  }
};

export default cartReducer;
