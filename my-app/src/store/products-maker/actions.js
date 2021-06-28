import { CHANGE_ISLIKED_PROPERTY_MAKERS } from "./const";

export function actionChangeIsLikedPropertyOnMakers(payload) {
  return {
    type: CHANGE_ISLIKED_PROPERTY_MAKERS,
    payload,
  };
}
