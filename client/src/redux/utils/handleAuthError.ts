import { Dispatch } from 'redux';
import { USER_GET_FAIL } from '../actions/userActionsTypes';
import {
  CREATE_SUBJECT_FAIL,
  GET_SUBJECT_FAIL,
  DELETE_SUBJECT_FAIL,
} from '../actions/subjectActionsTypes';

import {
  CREATE_RESOURCE_FAIL,
  DELETE_RESOURCE_FAIL,
  EDIT_RESOURCE_FAIL,
} from '../actions/resourceActionsTypes';

type ActionType =
  | typeof GET_SUBJECT_FAIL
  | typeof USER_GET_FAIL
  | typeof CREATE_SUBJECT_FAIL
  | typeof DELETE_SUBJECT_FAIL
  | typeof CREATE_RESOURCE_FAIL
  | typeof DELETE_RESOURCE_FAIL
  | typeof EDIT_RESOURCE_FAIL;

interface ErrorInterface {
  message: string;
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

const handleAuthError = (
  error: ErrorInterface,
  actionType: ActionType,
  dispatch: Dispatch
) => {
  if (error.response && error.response.data.message) {
    dispatch({
      type: actionType,
      payload: error.response.data.message,
    });
  } else if (error.response?.status === 401 || error.response?.status === 500) {
    dispatch({
      type: USER_GET_FAIL,
      payload: error.response.data.message,
    });
  } else {
    dispatch({
      type: USER_GET_FAIL,
      payload: error.message,
    });
  }
};

export default handleAuthError;
