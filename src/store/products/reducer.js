import PRODUCTS from './data'
import {
  CHANGE_ISLIKED_PROPERTY,
  CHANGE_PRODUCT_RATING,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from './const'
import { changeIsLikedProperty, changeProductRating } from './utils'

const INITIAL_STATE = {
  products: PRODUCTS,
  productsFetch: [],
  loading: false,
  error: false,
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      }
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productsFetch: action.payload,
        loading: false,
        error: false,
      }
    }

    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    case CHANGE_PRODUCT_RATING: {
      return {
        ...state,
        products: changeProductRating(state.products, action.payload),
      }
    }

    case CHANGE_ISLIKED_PROPERTY: {
      return {
        ...state,
        products: changeIsLikedProperty(state.products, action.payload),
      }
    }

    default:
      return state
  }
}

export default productReducer
