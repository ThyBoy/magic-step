import { createSelector } from "reselect";

const selectUi = (state) => state.ui;

export const selectAlertHidden = createSelector(
  [selectUi],
  (ui) => ui.alertHidden
);

export const selectAlertMessage = createSelector(
  [selectUi],
  (ui) => ui.alertMessage
);

export const selectLoading = createSelector([selectUi], (ui) => ui.loading);

export const selectNotificationsHidden = createSelector(
  [selectUi],
  (ui) => ui.notificationsHidden
);

export const selectCategories = createSelector(
  [selectUi],
  (ui) => ui.categories
);
