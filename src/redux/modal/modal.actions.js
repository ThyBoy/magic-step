import { modalActionTypes } from "./modal.types";

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
});

export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
});

export const changeNotification = (notification) => ({
  type: modalActionTypes.CHANGE_NOTIFICATION,
  payload: notification,
});

export const hideLoading = () => ({
  type: modalActionTypes.HIDE_LOADING,
});

export const showLoading = () => ({
  type: modalActionTypes.SHOW_LOADING,
});
