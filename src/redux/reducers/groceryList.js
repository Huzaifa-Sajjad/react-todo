import {
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  EDIT_ITEM_SUCCESS,
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return [...state, action.payload];
    case EDIT_ITEM_SUCCESS:
      const newItems = state;
      newItems.forEach((item) => {
        if (item.id === action.payload.id) {
          item.item = action.payload.text;
        }
      });
      return newItems;
    case DELETE_ITEM_SUCCESS:
      const newList = state.filter((item) => item.id !== action.payload);
      return newList;
    default:
      return state;
  }
}
