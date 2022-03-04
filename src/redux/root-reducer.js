import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"], //which reducer you want to persist, this can be comma separated values
  // we are not passing 'user' because that is already being managed by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
