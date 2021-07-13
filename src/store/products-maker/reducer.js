import PRODUCTS_MAKERS from './data'
import {
  CHANGE_ISLIKED_PROPERTY_MAKERS,
  CHANGE_MAKERS_RATING,
  GET_MAKERS,
  GET_MAKERS_SUCCESS,
  GET_MAKERS_ERROR,
} from './const'
import { changeIsLikedProperty, changeMakersRating } from './utils'

const INITIAL_STATE = {
  makers: PRODUCTS_MAKERS,
  makersFetch: [],
  loading: false,
  status: false,
}

const productMakersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MAKERS: {
      return {
        ...state,
        loading: true,
      }
    }

    case GET_MAKERS_SUCCESS: {
      return {
        ...state,
        makersFetch: action.payload,
        loading: false,
        error: false,
      }
    }

    case GET_MAKERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }

    case CHANGE_ISLIKED_PROPERTY_MAKERS: {
      return {
        ...state,
        makers: changeIsLikedProperty(state.makers, action.payload),
      }
    }

    case CHANGE_MAKERS_RATING: {
      return {
        ...state,
        makers: changeMakersRating(state.makers, action.payload),
      }
    }

    default:
      return state
  }
}

export default productMakersReducer
