import { CHANGE_ISLIKED_PROPERTY } from "./const";

export function actionChangeIsLikedProperty(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY,
    payload,
  };
}
