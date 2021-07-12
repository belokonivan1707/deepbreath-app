import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } from './const'

export const actionAddItem = (payload) => ({
  type: ADD_ITEM,
  payload,
})

export const actionRemoveItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
})

export const actionClearItemFromCart = (payload) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload,
})
