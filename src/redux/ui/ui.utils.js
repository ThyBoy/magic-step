import {
  showLoading,
  hideLoading,
  setCategories,
  changeAlertMessage,
  showAlert,
} from "./ui.actions";
import { requestServerAddress } from "../../env";
import axios from "axios";

export function fetchCategoriesThunk() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const state = getState();
    if (!state.ui.categories.length) {
      try {
        console.log("Called Categories");
        const response = await axios.get(
          requestServerAddress + "category/category"
        );
        dispatch(setCategories(response.data.categories));
      } catch (error) {
        if (error?.response.data?.msg) {
          dispatch(showAlertThunk(error.response.data.msg));
        } else if (error?.response.data?.error) {
          dispatch(showAlertThunk(error.response.data.error));
        } else {
          dispatch(showAlertThunk("Can't get categories!!"));
        }
        console.log(error);
      }
    }
    dispatch(hideLoading());
  };
}

export function showAlertThunk(alert) {
  return (dispatch) => {
    dispatch(changeAlertMessage(alert));
    dispatch(showAlert());
  };
}
