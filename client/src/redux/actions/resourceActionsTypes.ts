export const GET_ALL_RESOURCES_SUCCESS = "GET_RESOURCES_SUCCESS";

export const CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";
export const CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_RESOURCE_FAIL = "CREATE_RESOURCE_FAIL";

export const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";
export const DELETE_RESOURCE_SUCCESS = "DELETE_RESOURCE_SUCCESS";
export const DELETE_RESOURCE_FAIL = "DELETE_RESOURCE_FAIL";

export const EDIT_RESOURCE_REQUEST = "EDIT_RESOURCE_REQUEST";
export const EDIT_RESOURCE_SUCCESS = "EDIT_RESOURCE_SUCCESS";
export const EDIT_RESOURCE_FAIL = "EDIT_RESOURCE_FAIL";

export const DELETE_ALL_RESOURCES_REQUEST = "DELETE_ALL_RESOURCES_REQUEST";
export const DELETE_ALL_RESOURCES_SUCCESS = "DELETE_ALL_RESOURCES_SUCCESS";

export const SELECT_RESOURCE = "SELECT_RESOURCE";
export const RESET_SELECTED_RESOURCE = "RESET_SELECTED_RESOURCE";
export const RESET_RESOURCE_STATE = "RESET_RESOURCE_STATE";

export interface ResourceInterface {
  _id: string;
  title: string;
  url: string;
  tag?: string;
  subject?: string;
}

type GetAllResourcesSuccess = {
  type: typeof GET_ALL_RESOURCES_SUCCESS;
  payload: Array<ResourceInterface>;
};

type CreateResourceLoading = {
  type: typeof CREATE_RESOURCE_REQUEST;
};

type CreateResourceSuccess = {
  type: typeof CREATE_RESOURCE_SUCCESS;
  payload: ResourceInterface;
};

type CreateResourceFail = {
  type: typeof CREATE_RESOURCE_FAIL;
  payload: string;
};

type DeleteResourceLoading = {
  type: typeof DELETE_RESOURCE_REQUEST;
};

type DeleteResourceSuccess = {
  type: typeof DELETE_RESOURCE_SUCCESS;
  payload: string;
};

type DeleteResourceFail = {
  type: typeof DELETE_RESOURCE_FAIL;
  payload: string;
};

type EditResourceLoading = {
  type: typeof EDIT_RESOURCE_REQUEST;
};

type EditResourceSuccess = {
  type: typeof EDIT_RESOURCE_SUCCESS;
  payload: ResourceInterface;
};

type EditResourceFail = {
  type: typeof EDIT_RESOURCE_FAIL;
  payload: string;
};

type DeleteAllResourcesLoading = {
  type: typeof DELETE_ALL_RESOURCES_REQUEST;
};

type DeleteAllResourcesSuccess = {
  type: typeof DELETE_ALL_RESOURCES_SUCCESS;
};

type SelectResource = {
  type: typeof SELECT_RESOURCE;
  payload: ResourceInterface;
};

type ResetSelectedResource = {
  type: typeof RESET_SELECTED_RESOURCE;
};

type ResetResourceState = {
  type: typeof RESET_RESOURCE_STATE;
};

export type ResourceDispatchTypes =
  | GetAllResourcesSuccess
  | CreateResourceLoading
  | CreateResourceSuccess
  | CreateResourceFail
  | DeleteResourceLoading
  | DeleteResourceSuccess
  | DeleteResourceFail
  | EditResourceLoading
  | EditResourceSuccess
  | EditResourceFail
  | DeleteAllResourcesLoading
  | DeleteAllResourcesSuccess
  | SelectResource
  | ResetSelectedResource
  | ResetResourceState;
