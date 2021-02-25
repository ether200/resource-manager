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
  UserInterface,
} from '../actions/userActionsTypes';

interface InitialStateInterface {
  authorized: boolean;
  loading: boolean;
  user: null | UserInterface;
  authError: null | string;
  error: null | string;
}

const initialState: InitialStateInterface = {
  authorized: false,
  loading: false,
  user: null,
  authError: null,
  error: null,
};

const userReducer = (
  state: InitialStateInterface = initialState,
  action: UserDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case USER_GET_REQUEST:
    case USER_REGISTER_LOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        authError: null,
      };
    case USER_REGISTER_LOG_SUCCESS:
    case USER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
        user: action.payload,
      };
    case USER_REGISTER_LOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_GET_FAIL:
      return {
        ...state,
        loading: false,
        authorized: false,
        authError: action.payload,
      };
    case USER_LOGOUT_RESET:
      return {
        ...state,
        loading: false,
        user: null,
        error: null,
        authorized: false,
      };
    case USER_ERRORS_RESET:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
