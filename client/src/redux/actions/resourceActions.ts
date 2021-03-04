import {
  CREATE_RESOURCE_REQUEST,
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_FAIL,
  DELETE_RESOURCE_REQUEST,
  DELETE_RESOURCE_SUCCESS,
  DELETE_RESOURCE_FAIL,
  EDIT_RESOURCE_REQUEST,
  EDIT_RESOURCE_SUCCESS,
  EDIT_RESOURCE_FAIL,
  SELECT_RESOURCE,
  RESET_SELECTED_RESOURCE,
  RESET_RESOURCE_STATE,
  ResourceDispatchTypes,
  ResourceInterface,
} from "./resourceActionsTypes";

import { Dispatch } from "redux";
import { ResourceFormValues } from "../../components/ResourceForm";
import axiosConfig from "../../config/axiosConfig";
import authConfig from "../../config/authConfig";
import handleAuthError from "../utils/handleAuthError";

interface ResourceCreateInterface extends ResourceFormValues {
  subject: string;
}

export const createResource = (resource: ResourceCreateInterface) => async (
  dispatch: Dispatch<ResourceDispatchTypes>
) => {
  try {
    dispatch({ type: CREATE_RESOURCE_REQUEST });
    const response = await axiosConfig.post("/api/resources", resource, {
      headers: authConfig(),
    });
    dispatch({
      type: CREATE_RESOURCE_SUCCESS,
      payload: response.data.data.newResource,
    });
  } catch (error) {
    handleAuthError(error, CREATE_RESOURCE_FAIL, dispatch);
  }
};

export const editResource = (
  resource: ResourceFormValues,
  resourceId: string
) => async (dispatch: Dispatch<ResourceDispatchTypes>) => {
  try {
    dispatch({ type: EDIT_RESOURCE_REQUEST });
    const response = await axiosConfig.put(
      `/api/resources/${resourceId}`,
      resource,
      { headers: authConfig() }
    );
    dispatch({
      type: EDIT_RESOURCE_SUCCESS,
      payload: response.data.data.newResource,
    });
  } catch (error) {
    handleAuthError(error, EDIT_RESOURCE_FAIL, dispatch);
  }
};

export const deleteResource = (resourceId: string) => async (
  dispatch: Dispatch<ResourceDispatchTypes>
) => {
  try {
    dispatch({ type: DELETE_RESOURCE_REQUEST });
    await axiosConfig.delete(`/api/resources/${resourceId}`, {
      headers: authConfig(),
    });
    dispatch({ type: DELETE_RESOURCE_SUCCESS, payload: resourceId });
  } catch (error) {
    handleAuthError(error, DELETE_RESOURCE_FAIL, dispatch);
  }
};

export const selectResourceToEdit = (resource: ResourceInterface) => (
  dispatch: Dispatch<ResourceDispatchTypes>
) => dispatch({ type: SELECT_RESOURCE, payload: resource });

export const resetSelectedResource = (
  dispatch: Dispatch<ResourceDispatchTypes>
) => dispatch({ type: RESET_SELECTED_RESOURCE });

export const resetResourceState = (dispatch: Dispatch<ResourceDispatchTypes>) =>
  dispatch({ type: RESET_RESOURCE_STATE });
