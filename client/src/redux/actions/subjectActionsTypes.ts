export const CREATE_SUBJECT_REQUEST = 'CREATE_SUBJECT_REQUEST';
export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS';
export const CREATE_SUBJECT_FAIL = 'CREATE_SUBJECT_FAIL';

export const DELETE_SUBJECT_REQUEST = 'DELETE_SUBJECT_REQUEST';
export const DELETE_SUBJECT_SUCCESS = 'DELETE_SUBJECT_SUCCESS';
export const DELETE_SUBJECT_FAIL = 'DELETE_SUBJECT_FAIL';

export const GET_SUBJECT_REQUEST = 'GET_SUBJECT_REQUEST';
export const GET_SUBJECT_SUCCESS = 'GET_SUBJECT_SUCCESS';
export const GET_SUBJECT_FAIL = 'GET_SUBJECT_FAIL';

export const GET_ALL_SUBJECTS_SUCCESS = 'GET_ALL_SUBJECT_SUCCESS';

export const RESET_SUBJECT_STATE = 'RESET_SUBJECT_STATE';
export const RESET_SELECTED_SUBJECT = 'RESET_SELECTED_SUBJECT';

export interface SubjectInterface {
  createdAt: string;
  _id: string;
  name: string;
  creator: string;
}

type CreateSubjectLoading = {
  type: typeof CREATE_SUBJECT_REQUEST;
};

type CreateSubjectSuccess = {
  type: typeof CREATE_SUBJECT_SUCCESS;
  payload: SubjectInterface;
};

type CreateSubjectFail = {
  type: typeof CREATE_SUBJECT_FAIL;
  payload: string;
};

type DeleteSubjectLoading = {
  type: typeof DELETE_SUBJECT_REQUEST;
};

type DeleteSubjectSuccess = {
  type: typeof DELETE_SUBJECT_SUCCESS;
  payload: string;
};

type DeleteSubjectFail = {
  type: typeof DELETE_SUBJECT_FAIL;
  payload: string;
};

type GetSubjectLoading = {
  type: typeof GET_SUBJECT_REQUEST;
};

type GetSubjectSuccess = {
  type: typeof GET_SUBJECT_SUCCESS;
  payload: SubjectInterface[];
};

type GetSubjectFail = {
  type: typeof GET_SUBJECT_FAIL;
  payload: string;
};

type GetAllSubjectsSuccess = {
  type: typeof GET_ALL_SUBJECTS_SUCCESS;
  payload: Array<SubjectInterface>;
};

type ResetSubjectState = {
  type: typeof RESET_SUBJECT_STATE;
};

type ResetSelectedSubject = {
  type: typeof RESET_SELECTED_SUBJECT;
};

export type SubjectDispatchTypes =
  | CreateSubjectLoading
  | CreateSubjectSuccess
  | CreateSubjectFail
  | DeleteSubjectLoading
  | DeleteSubjectSuccess
  | DeleteSubjectFail
  | GetSubjectLoading
  | GetSubjectSuccess
  | GetSubjectFail
  | GetAllSubjectsSuccess
  | ResetSubjectState
  | ResetSelectedSubject;
