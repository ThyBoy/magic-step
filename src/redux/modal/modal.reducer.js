import { modalActionTypes } from "./modal.types";

const INITIAL_STATE = {
  hidden: true,
  notification: "",
  loading: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return {
        ...state,
        hidden: false,
      };

    case modalActionTypes.HIDE_MODAL:
      return {
        ...state,
        hidden: true,
      };

    case modalActionTypes.CHANGE_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };

    case modalActionTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    case modalActionTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
