import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import headerReducer from './header-menus/reducer'
import productMakersReducer from './products-maker/reducer'
import productReducer from './products/reducer'
import filterReducer from './header-filter/reducer'
import DataLandingsReducer from './landings/reducer'
import cartReducer from './cart/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  productStore: productReducer,
  productMakersStore: productMakersReducer,
  headerState: headerReducer,
  filterState: filterReducer,
  landingsDataStore: DataLandingsReducer,
  cart: cartReducer,
})
export default persistReducer(persistConfig, rootReducer)
