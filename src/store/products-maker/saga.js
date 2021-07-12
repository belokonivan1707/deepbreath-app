import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_MAKERS } from './const'
import { actionGetMakersSuccess, actionGetMakersError } from './actions'
import { getMakers } from '../../request/get_request'
import { makersUrl } from '../../constants/url'

function* makersRequest() {
  try {
    const makers = yield call(getMakers, makersUrl)
    yield put(actionGetMakersSuccess(makers))
  } catch {
    put(actionGetMakersError())
  }
}

export default function* makersWhatcher() {
  yield takeLatest(GET_MAKERS, makersRequest)
}
