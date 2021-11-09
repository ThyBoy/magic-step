import { uiActionTypes } from "./ui.types";

export const showAlert = () => ({
  type: uiActionTypes.SHOW_ALERT,
});

export const hideModal = () => ({
  type: uiActionTypes.HIDE_ALERT,
});

export const changeAlertMessage = (message) => ({
  type: uiActionTypes.CHANGE_ALERT_MESSAGE,
  payload: message,
});

export const hideLoading = () => ({
  type: uiActionTypes.HIDE_LOADING,
});

export const showLoading = () => ({
  type: uiActionTypes.SHOW_LOADING,
});

export const showNotifications = () => ({
  type: uiActionTypes.SHOW_NOTIFICATIONS,
});

export const hideNotifications = () => ({
  type: uiActionTypes.HIDE_NOTIFICATIONS,
});

export const setCategories = (categories) => ({
  type: uiActionTypes.SET_CATEGORIES,
  payload: categories,
});
