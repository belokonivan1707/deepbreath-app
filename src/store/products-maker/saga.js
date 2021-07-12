import { call, put, takeLatest } from 'redux-saga/effects'
import { actionGetMakersSuccess } from './actions'
import { GET_MAKERS } from './const'
import { getMakers } from '../../request/get_request'
import { makersUrl } from '../../constants/makers'

function* makersRequest() {
  try {
    const makers = yield call(getMakers, makersUrl)
    yield put(actionGetMakersSuccess(makers))
  } catch {}
}

export default function* makersWhatcher() {
  yield takeLatest(GET_MAKERS, makersRequest)
}
