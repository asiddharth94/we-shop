import { UserActionTypes } from "./user.types";

// this is similar to setting up the initial state
const INITIAL_STATE = { currentUser: null };

// using default parameter for state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

// NOTE - EVERY SINGLE REDUCER GETS EVERY SINGLE ACTION THAT IS FIRED
// EVEN IF THOSE ACTIONS ARE NOT RELATED TO THAT REDUCER,
// this is why we are returning the state in default option
// because other actions will not match in this reducer's switch

export default userReducer;
