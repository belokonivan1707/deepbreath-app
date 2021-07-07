import { ADD_ITEM, DELETE_ITEM } from './const'
import { addItemToCart, deleteItemFromCart } from './utils'

const INITIAL_STATE = {
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    }

    case DELETE_ITEM: {
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      }
    }

    default: {
      return state
    }
  }
}

export default cartReducer
