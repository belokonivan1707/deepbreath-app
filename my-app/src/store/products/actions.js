import { CHANGE_ISLIKED_PROPERTY, CHANGE_PRODUCT_RATING } from "./const";

export function actionChangeIsLikedProperty(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY,
    payload,
  };
}

export const actionChangeProductRating = (payload) => {
  return {
    type: CHANGE_PRODUCT_RATING,
    payload,
  };
};
