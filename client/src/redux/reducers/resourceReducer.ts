import {
  GET_ALL_RESOURCES_SUCCESS,
  CREATE_RESOURCE_REQUEST,
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_FAIL,
  DELETE_RESOURCE_REQUEST,
  DELETE_RESOURCE_SUCCESS,
  DELETE_RESOURCE_FAIL,
  EDIT_RESOURCE_REQUEST,
  EDIT_RESOURCE_SUCCESS,
  EDIT_RESOURCE_FAIL,
  DELETE_ALL_RESOURCES_REQUEST,
  DELETE_ALL_RESOURCES_SUCCESS,
  SELECT_RESOURCE,
  RESET_SELECTED_RESOURCE,
  RESET_RESOURCE_STATE,
  ResourceDispatchTypes,
  ResourceInterface,
} from '../actions/resourceActionsTypes';

interface InitialStateInterface {
  resources: Array<ResourceInterface>;
  resourceLoading: boolean;
  resourceError: null | string;
  selectedResource: Array<ResourceInterface>;
}

const initialState: InitialStateInterface = {
  resources: [],
  resourceLoading: false,
  resourceError: null,
  selectedResource: [],
};

const resourceReducer = (
  state: InitialStateInterface = initialState,
  action: ResourceDispatchTypes
): InitialStateInterface => {
  switch (action.type) {
    case EDIT_RESOURCE_REQUEST:
    case DELETE_ALL_RESOURCES_REQUEST:
    case DELETE_RESOURCE_REQUEST:
    case CREATE_RESOURCE_REQUEST:
      return {
        ...state,
        resourceLoading: true,
        resourceError: null,
      };
    case CREATE_RESOURCE_SUCCESS:
      return {
        ...state,
        resourceLoading: false,
        resources: [action.payload, ...state.resources],
      };
    case EDIT_RESOURCE_FAIL:
    case DELETE_RESOURCE_FAIL:
    case CREATE_RESOURCE_FAIL:
      return {
        ...state,
        resourceLoading: false,
        resourceError: action.payload,
      };
    case DELETE_RESOURCE_SUCCESS:
      return {
        ...state,
        resourceLoading: false,
        resources: state.resources.filter(
          (resource) => resource._id !== action.payload
        ),
      };
    case EDIT_RESOURCE_SUCCESS:
      return {
        ...state,
        resourceLoading: false,
        resources: state.resources.map((resource) =>
          action.payload._id === resource._id ? action.payload : resource
        ),
      };
    case GET_ALL_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.payload,
      };
    case SELECT_RESOURCE:
      return {
        ...state,
        selectedResource: [action.payload],
      };
    case RESET_SELECTED_RESOURCE:
      return {
        ...state,
        selectedResource: [],
      };
    case RESET_RESOURCE_STATE:
    case DELETE_ALL_RESOURCES_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default resourceReducer;
