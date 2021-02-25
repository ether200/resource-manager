export const USER_REGISTER_LOG_REQUEST = 'USER_REGISTER_LOG_REQUEST';
export const USER_REGISTER_LOG_SUCCESS = 'USER_REGISTER_LOG_SUCCESS';
export const USER_REGISTER_LOG_FAIL = 'USER_REGISTER_LOG_FAIL';

export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAIL = 'USER_GET_FAIL';

export const USER_LOGOUT_RESET = 'USER_LOGOUT_RESET';
export const USER_ERRORS_RESET = 'USER_ERRORS_RESET';

export interface UserInterface {
  _id: string;
  name: string;
  email: string;
}

type RegisterLogLoading = {
  type: typeof USER_REGISTER_LOG_REQUEST;
};

type RegisterLogSuccess = {
  type: typeof USER_REGISTER_LOG_SUCCESS;
  payload: UserInterface;
};

type RegisterLogFail = {
  type: typeof USER_REGISTER_LOG_FAIL;
  payload: string;
};

type UserGetLoading = {
  type: typeof USER_GET_REQUEST;
};

type UserGetSuccess = {
  type: typeof USER_GET_SUCCESS;
  payload: UserInterface;
};

export type UserGetFail = {
  type: typeof USER_GET_FAIL;
  payload: string;
};

type UserLogout = {
  type: typeof USER_LOGOUT_RESET;
};

type UserErrorsReset = {
  type: typeof USER_ERRORS_RESET;
};

export type UserDispatchTypes =
  | RegisterLogLoading
  | RegisterLogSuccess
  | RegisterLogFail
  | UserGetLoading
  | UserGetSuccess
  | UserGetFail
  | UserLogout
  | UserErrorsReset;
