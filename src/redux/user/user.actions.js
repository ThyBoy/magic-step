import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetCurrentUser = () => ({
  type: userActionTypes.RESET_CURRENT_USER,
});

export const setUnapproved = (bool) => ({
  type: userActionTypes.SET_USER_STATUS,
  payload: bool,
});

export const setUserLocation = (location) => ({
  type: userActionTypes.SET_USER_LOCATION,
  payload: location,
});
