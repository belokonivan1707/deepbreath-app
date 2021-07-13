import {
  CHANGE_ISLIKED_PROPERTY_MAKERS,
  CHANGE_MAKERS_RATING,
  GET_MAKERS,
  GET_MAKERS_SUCCESS,
  GET_MAKERS_ERROR,
} from './const'

export function actionGetMakers() {
  return {
    type: GET_MAKERS,
  }
}

export function actionGetMakersSuccess(payload) {
  return {
    type: GET_MAKERS_SUCCESS,
    payload,
  }
}

export function actionGetMakersError() {
  return {
    type: GET_MAKERS_ERROR,
  }
}

export function actionChangeMakersRating(payload) {
  return {
    type: CHANGE_MAKERS_RATING,
    payload,
  }
}

export function actionChangeIsLikedPropertyOnMakers(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY_MAKERS,
    payload,
  }
}
