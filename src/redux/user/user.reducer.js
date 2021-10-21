import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  unapproved: true,
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
        unapproved: true,
      };

    case userActionTypes.SET_USER_STATUS:
      return {
        ...state,
        unapproved: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
