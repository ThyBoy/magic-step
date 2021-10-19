import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetCurrentUser = () => ({
  type: userActionTypes.RESET_CURRENT_USER,
});

export const setUserStatus = () => ({
  type: userActionTypes.SET_USER_STATUS,
});
