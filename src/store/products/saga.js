import { takeEvery } from "redux-saga/effects";

function* test() {
  yield console.log("test saga");
}

export default function* testSaga() {
  yield takeEvery("USERS_REQUESTING", test);
}
