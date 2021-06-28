import PRODUCTS_MAKERS from "./data";
import { CHANGE_ISLIKED_PROPERTY_MAKERS } from "./const";
import { changeIsLikedProperty } from "./utils";

const INITIAL_STATE = {
  makers: PRODUCTS_MAKERS,
};

const productMakersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
