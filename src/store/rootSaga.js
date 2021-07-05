import { all } from "redux-saga/effects";
import testSaga from "./products/saga";

export default function* rootSaga() {
  yield all([testSaga()]);
}
