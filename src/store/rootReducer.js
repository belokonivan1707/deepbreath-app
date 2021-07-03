import { combineReducers } from "redux";
import headerReducer from "./header-menus/reducer";
import productMakersReducer from "./products-maker/reducer";
import productReducer from "./products/reducer";
import filterReducer from "./header-filter/reducer";
import DataLandingsReducer from './landings/reducer';

const rootReducer = combineReducers({
  productStore: productReducer,
  productMakersStore: productMakersReducer,
  headerState: headerReducer,
  filterState: filterReducer,
  landingsDataStore: DataLandingsReducer,
});

export default rootReducer;
