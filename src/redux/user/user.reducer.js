import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userActionTypes.RESET_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };

    case userActionTypes.SET_USER_STATUS:
      return {
        ...state,
        currentUser: { unapproved: false, ...state.currentUser },
      };

    default:
      return state;
  }
};

export default userReducer;
