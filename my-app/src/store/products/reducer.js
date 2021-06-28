import PRODUCTS from "./data";
import { CHANGE_ISLIKED_PROPERTY } from "./const";
import { changeIsLikedProperty } from "./utils";

const INITIAL_STATE = {
  products: PRODUCTS,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
