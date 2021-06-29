import { CHANGE_ISLIKED_PROPERTY_MAKERS, CHANGE_MAKERS_RATING } from "./const";

export function actionChangeIsLikedPropertyOnMakers(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY_MAKERS,
    payload,
  };
}

export function actionChangeMakersRating(payload) {
  return {
    type: CHANGE_MAKERS_RATING,
    payload,
  };
}
