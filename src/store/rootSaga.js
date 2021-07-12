import { all } from 'redux-saga/effects'
import makersWhatcher from './products-maker/saga'
import testSaga from './products/saga'

export default function* rootSaga() {
  yield all([testSaga(), makersWhatcher()])
}
