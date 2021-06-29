import PRODUCTS_MAKERS from "./data";
import { CHANGE_ISLIKED_PROPERTY_MAKERS, CHANGE_MAKERS_RATING } from "./const";
import { changeIsLikedProperty, changeMakersRating } from "./utils";

const INITIAL_STATE = {
  makers: PRODUCTS_MAKERS,
};

const productMakersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_MAKERS_RATING: {
      return {
        ...state,
        makers: changeMakersRating(state.makers, action.payload),
      };
    }
    case CHANGE_ISLIKED_PROPERTY_MAKERS: {
      return {
        ...state,
        makers: changeIsLikedProperty(state.makers, action.payload),
      };
    }

    default:
      return state;
  }
};

export default productMakersReducer;
 