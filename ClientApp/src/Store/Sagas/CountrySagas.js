import { takeLatest, put } from "redux-saga/effects";
import {
  GET_COUNTRY_DETAILS,
  getCountryDetailsSuccess,
} from "../Actions/CountryActions";
import { GET_COUNTRY_DETAILS_URL } from "../Api/ApiEndpoints";

/* Worker Sagas */
function* getCountryDetails(action) {
  const response = yield fetch(
    GET_COUNTRY_DETAILS_URL(action.userCountryInput)
  );
  if (response.ok) {
    const data = yield response.json();
    yield put(getCountryDetailsSuccess(data));
  }
}

/* Watcher Sagas */
export function* getCountryDetailsSagas() {
  yield takeLatest(GET_COUNTRY_DETAILS, getCountryDetails);
}
