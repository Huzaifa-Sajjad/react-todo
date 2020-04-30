import {
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  EDIT_ITEM_SUCCESS,
} from "./types";

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_SUCCESS,
    payload: item,
  });
};

export const editItem = (id, text) => (dispatch) => {
  dispatch({
    type: EDIT_ITEM_SUCCESS,
    payload: { id, text },
  });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_SUCCESS,
    payload: id,
  });
};
