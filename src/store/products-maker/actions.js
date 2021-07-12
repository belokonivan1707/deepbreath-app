import { CHANGE_ISLIKED_PROPERTY_MAKERS, CHANGE_MAKERS_RATING, GET_MAKERS, GET_MAKERS_SUCCESS } from './const'

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

export function actionChangeIsLikedPropertyOnMakers(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY_MAKERS,
    payload,
  }
}

export function actionChangeMakersRating(payload) {
  return {
    type: CHANGE_MAKERS_RATING,
    payload,
  }
}
