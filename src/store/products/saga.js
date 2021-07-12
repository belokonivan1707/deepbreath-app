import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCTS } from './const'
import { actionGetProductsError, actionGetProductsSuccess } from './actions'
import { getProducts } from '../../request/get_request'
import { productsUrl } from '../../constants/url'

function* productsRequest() {
  try {
    const products = yield call(getProducts, productsUrl)
    yield put(actionGetProductsSuccess(products))
  } catch {
    put(actionGetProductsError)
  }
}

export default function* getProductsWhatcher() {
  yield takeLatest(GET_PRODUCTS, productsRequest)
}
