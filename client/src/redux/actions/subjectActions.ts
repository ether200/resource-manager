import {
  CREATE_SUBJECT_REQUEST,
  CREATE_SUBJECT_SUCCESS,
  CREATE_SUBJECT_FAIL,
  DELETE_SUBJECT_REQUEST,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAIL,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAIL,
  GET_ALL_SUBJECTS_SUCCESS,
  RESET_SUBJECT_STATE,
  RESET_SELECTED_SUBJECT,
  SubjectDispatchTypes,
} from './subjectActionsTypes';

import {
  DELETE_ALL_RESOURCES_REQUEST,
  DELETE_ALL_RESOURCES_SUCCESS,
  GET_ALL_RESOURCES_SUCCESS,
  ResourceDispatchTypes,
} from './resourceActionsTypes';

import { USER_GET_FAIL } from './userActionsTypes';

import { Dispatch } from 'redux';
import axiosConfig from '../../config/axiosConfig';
import authConfig from '../../config/authConfig';
import handleAuthError from '../utils/handleAuthError';

type Subject = {
  name: string;
};

export const createSubject = (subject: Subject) => async (
  dispatch: Dispatch<SubjectDispatchTypes>
) => {
  try {
    dispatch({ type: CREATE_SUBJECT_REQUEST });
    const response = await axiosConfig.post('/api/subjects', subject, {
      headers: authConfig(),
    });
    dispatch({
      type: CREATE_SUBJECT_SUCCESS,
      payload: response.data.data.newSubject,
    });
  } catch (error) {
    handleAuthError(error, CREATE_SUBJECT_FAIL, dispatch);
  }
};

export const getSubject = (subjectId: string) => async (
  dispatch: Dispatch<SubjectDispatchTypes | ResourceDispatchTypes>
) => {
  try {
    dispatch({ type: GET_SUBJECT_REQUEST });
    const response = await Promise.all([
      axiosConfig.get(`/api/subjects/${subjectId}`, { headers: authConfig() }),
      axiosConfig.get(`/api/resources/${subjectId}`, { headers: authConfig() }),
    ]);
    dispatch({
      type: GET_SUBJECT_SUCCESS,
      payload: response[0].data.data.subject,
    });
    dispatch({
      type: GET_ALL_RESOURCES_SUCCESS,
      payload: response[1].data.data.resources,
    });
  } catch (error) {
    handleAuthError(error, GET_SUBJECT_FAIL, dispatch);
  }
};

export const deleteSubject = (subjectId: string) => async (
  dispatch: Dispatch<SubjectDispatchTypes | ResourceDispatchTypes>
) => {
  try {
    dispatch({ type: DELETE_SUBJECT_REQUEST });
    dispatch({ type: DELETE_ALL_RESOURCES_REQUEST });
    await axiosConfig.delete(`/api/subjects/${subjectId}`, {
      headers: authConfig(),
    });
    dispatch({
      type: DELETE_SUBJECT_SUCCESS,
      payload: subjectId,
    });
    dispatch({ type: DELETE_ALL_RESOURCES_SUCCESS });
  } catch (error) {
    handleAuthError(error, DELETE_SUBJECT_FAIL, dispatch);
  }
};

export const getAllSubjects = async (
  dispatch: Dispatch<SubjectDispatchTypes>
) => {
  try {
    const response = await axiosConfig.get('/api/subjects', {
      headers: authConfig(),
    });
    dispatch({
      type: GET_ALL_SUBJECTS_SUCCESS,
      payload: response.data.data.subjects,
    });
  } catch (error) {
    handleAuthError(error, USER_GET_FAIL, dispatch);
  }
};

export const resetSubjectState = (dispatch: Dispatch<SubjectDispatchTypes>) =>
  dispatch({ type: RESET_SUBJECT_STATE });

export const resetSelectedSubject = (
  dispatch: Dispatch<SubjectDispatchTypes>
) => dispatch({ type: RESET_SELECTED_SUBJECT });
