import { CartActionTypes } from "./cart.types";
import { addItemsToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartVisibility: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartVisibility: !state.cartVisibility,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
