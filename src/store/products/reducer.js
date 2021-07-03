import PRODUCTS from "./data";
import { CHANGE_ISLIKED_PROPERTY, CHANGE_PRODUCT_RATING } from "./const";
import { changeIsLikedProperty, changeProductRating } from "./utils";

const INITIAL_STATE = {
  products: PRODUCTS,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_RATING: {
      return {
        ...state,
        products: changeProductRating(state.products, action.payload),
      };
    }
    case CHANGE_ISLIKED_PROPERTY: {
      return {
        ...state,
        products: changeIsLikedProperty(state.products, action.payload),
      };
    }

    default:
      return state;
  }
};

export default productReducer;
