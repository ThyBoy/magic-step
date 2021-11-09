import { uiActionTypes } from "./ui.types";

const INITIAL_STATE = {
  alertHidden: true,
  alertMessage: "",
  loading: false,
  notificationsHidden: true,
  categories: [],
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiActionTypes.SHOW_ALERT:
      return {
        ...state,
        alertHidden: false,
      };

    case uiActionTypes.HIDE_ALERT:
      return {
        ...state,
        alertHidden: true,
      };

    case uiActionTypes.CHANGE_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload,
      };

    case uiActionTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    case uiActionTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };

    case uiActionTypes.SHOW_NOTIFICATIONS:
      return {
        ...state,
        notificationsHidden: false,
      };

    case uiActionTypes.HIDE_NOTIFICATIONS:
      return {
        ...state,
        notificationsHidden: true,
      };

    case uiActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
