import { ADD_ITEM, DELETE_ITEM } from "./const";

export const actionAddItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const actionDeleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
