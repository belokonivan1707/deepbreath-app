import PRODUCTS from "../products/data";
import PRODUCTS_MAKERS from "../products-maker/data";

const INITIAL_STATE = {
  productsFilter: PRODUCTS,
  makersFilter: PRODUCTS_MAKERS,
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case CHANGE_ISLIKED_PROPERTY: {
    //   return {
    //     ...state,
    //     products: changeIsLikedProperty(state.products, action.payload),
    //   };
    // }

    default:
      return state;
  }
};

export default filterReducer;
