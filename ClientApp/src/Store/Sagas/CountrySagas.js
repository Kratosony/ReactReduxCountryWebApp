import { takeLatest, put } from "redux-saga/effects";
import {
  GET_COUNTRY_DETAILS,
  GET_ALL_COUNTRIES,
  getCountryDetailsSuccess,
  getAllCountriesSuccess,
  openErrorModal,
} from "../Actions/CountryActions";
import {
  GET_COUNTRY_DETAILS_URL,
  GET_ALL_COUNTRY_DETAILS_URL,
} from "../Api/ApiEndpoints";

/* Worker Sagas */
function* getCountryDetails(action) {
  const response = yield fetch(
    GET_COUNTRY_DETAILS_URL(action.userCountryInput, action.fullNameSearch)
  );
  if (response.ok) {
    const data = yield response.json();
    yield put(getCountryDetailsSuccess(data));
  } else {
    yield put(openErrorModal());
  }
}
function* getAllCountryDetails() {
  const response = yield fetch(GET_ALL_COUNTRY_DETAILS_URL);
  if (response.ok) {
    console.log(response.json);
    const data = yield response.json();
    yield put(getAllCountriesSuccess(data));
  } else {
    console.log(response.json);
    yield put(openErrorModal());
  }
}

/* Watcher Sagas */
export function* getCountryDetailsSagas() {
  yield takeLatest(GET_COUNTRY_DETAILS, getCountryDetails);
  yield takeLatest(GET_ALL_COUNTRIES, getAllCountryDetails);
}
