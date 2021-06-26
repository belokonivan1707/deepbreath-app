import { combineReducers } from "redux";
import productMakersReducer from "./products-maker/reducer";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({
  productStore: productReducer,
  productMakersStore: productMakersReducer,
});

export default rootReducer;
