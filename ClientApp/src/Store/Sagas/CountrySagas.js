import { takeLatest, put } from "redux-saga/effects";
import {
  GET_COUNTRY_DETAILS,
  getCountryDetailsSuccess,
} from "../Actions/CountryActions";

/* Worker Sagas */
function* getCountryDetails(action) {
  console.log(action);
  yield put(getCountryDetailsSuccess(action.country));
}

/* Watcher Sagas */
export function* getCountryDetailsSagas() {
  yield takeLatest(GET_COUNTRY_DETAILS, getCountryDetails);
}
