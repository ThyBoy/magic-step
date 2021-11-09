import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserStatus = createSelector(
  [selectUser],
  (user) => user.unapproved
);

export const selectToken = createSelector(
  [selectCurrentUser],
  (user) => user.token
);

export const selectLocation = createSelector(
  [selectUser],
  (user) => user.location
);
