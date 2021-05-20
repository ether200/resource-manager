import axiosConfig from "../../config/axiosConfig";
import authConfig from "../../config/authConfig";
import { Dispatch } from "redux";
import { LogFormValues } from "../../components/LoginForm";
import { RegisterFormValues } from "../../components/RegisterForm";

import {
  USER_REGISTER_LOG_REQUEST,
  USER_REGISTER_LOG_SUCCESS,
  USER_REGISTER_LOG_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAIL,
  USER_LOGOUT_RESET,
  USER_ERRORS_RESET,
  UserDispatchTypes,
} from "./userActionsTypes";

type DataValues = LogFormValues | RegisterFormValues;

// Dispatch an user action depending of type which can be register or login
export const registerLogUser =
  (type: string, data: DataValues) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      dispatch({
        type: USER_REGISTER_LOG_REQUEST,
      });
      const response = await axiosConfig.post(`/api/users/${type}`, data);
      sessionStorage.setItem("token", response.data.token);
      dispatch({
        type: USER_REGISTER_LOG_SUCCESS,
        payload: response.data.data.user,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_LOG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUser = async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: USER_GET_REQUEST,
    });
    const response = await axiosConfig.get(`/api/users`, {
      headers: authConfig(),
    });
    dispatch({
      type: USER_GET_SUCCESS,
      payload: response.data.data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutUser = (dispatch: Dispatch<UserDispatchTypes>) => {
  sessionStorage.removeItem("token");
  dispatch({
    type: USER_LOGOUT_RESET,
  });
};

export const resetUserErrors = (dispatch: Dispatch<UserDispatchTypes>) =>
  dispatch({ type: USER_ERRORS_RESET });
