import { all } from 'redux-saga/effects'
import makersWhatcher from './products-maker/saga'
import getProductsWhatcher from './products/saga'

export default function* rootSaga() {
  yield all([getProductsWhatcher(), makersWhatcher()])
}
