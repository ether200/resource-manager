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
  SubjectInterface,
} from '../actions/subjectActionsTypes';

interface InitialStateInterface {
  subjects: SubjectInterface[];
  selectedSubject: SubjectInterface[];
  subjectLoading: boolean;
  createSubjectError: null | string;
  subjectError: null | string;
}

const initialState: InitialStateInterface = {
  subjects: [],
  selectedSubject: [],
  subjectLoading: false,
  createSubjectError: null,
  subjectError: null,
};

const subjectReducer = (
  state: InitialStateInterface = initialState,
  action: SubjectDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case DELETE_SUBJECT_REQUEST:
    case GET_SUBJECT_REQUEST:
    case CREATE_SUBJECT_REQUEST:
      return {
        ...state,
        subjectLoading: true,
        createSubjectError: null,
        subjectError: null,
      };
    case CREATE_SUBJECT_SUCCESS:
      return {
        ...state,
        subjectLoading: false,
        subjects: [action.payload, ...state.subjects],
      };
    case CREATE_SUBJECT_FAIL:
      return {
        ...state,
        subjectLoading: false,
        createSubjectError: action.payload,
      };
    case GET_ALL_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: action.payload,
      };
    case GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subjectLoading: false,
        selectedSubject: action.payload,
      };
    case DELETE_SUBJECT_FAIL:
    case GET_SUBJECT_FAIL:
      return {
        ...state,
        subjectLoading: false,
        subjectError: action.payload,
      };
    case DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
        subjectLoading: false,
        selectedSubject: [],
        subjects: state.subjects.filter(
          (subject) => subject._id !== action.payload
        ),
      };
    case RESET_SELECTED_SUBJECT:
      return {
        ...state,
        selectedSubject: [],
      };
    case RESET_SUBJECT_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default subjectReducer;
