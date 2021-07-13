import {
  CHANGE_ISLIKED_PROPERTY,
  CHANGE_PRODUCT_RATING,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS, 
  GET_PRODUCTS_ERROR,
} from './const'

export function actionGetProducts() {
  return {
    type: GET_PRODUCTS, 
  }
}

export function actionGetProductsSuccess(payload) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  }
}

export function actionGetProductsError() {
  return {
    type: GET_PRODUCTS_ERROR,
  }
}

export function actionChangeIsLikedProperty(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY,
    payload,
  }
}

export const actionChangeProductRating = (payload) => {
  return {
    type: CHANGE_PRODUCT_RATING,
    payload,
  }
}
