import SHOP_DATA from "../../components/ShopPage/Shop.data.ts";

const INTITAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INTITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
