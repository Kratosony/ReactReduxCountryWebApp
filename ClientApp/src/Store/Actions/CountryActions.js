export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_COUNTRY_DETAILS_SUCCESS = "GET_COUNTRY_DETAILS_SUCCESS";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_COUNTRIES_SUCCESS = "GET_ALL_COUNTRIES_SUCCESS";
export const CLOSE_COUNTRY_MODAL = "CLOSE_COUNTRY_MODAL";
export const OPEN_ERROR_MODAL = "OPEN_ERROR_MODAL";
export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";

export function getCountryDetails(
  userCountryInput,
  { fullNameSearch = false }
) {
  return {
    type: GET_COUNTRY_DETAILS,
    userCountryInput,
    fullNameSearch,
  };
}

export function getCountryDetailsSuccess(data) {
  return {
    type: GET_COUNTRY_DETAILS_SUCCESS,
    countryData: data,
    countryModal: true,
  };
}

export function getAllCountries() {
  return {
    type: GET_ALL_COUNTRIES,
  };
}
export function getAllCountriesSuccess(data) {
  return {
    type: GET_ALL_COUNTRIES_SUCCESS,
    countryData: data,
    countryModal: true,
  };
}

export function closeCountryModal() {
  return {
    type: CLOSE_COUNTRY_MODAL,
    countryModal: false,
  };
}

export function openErrorModal() {
  return {
    type: OPEN_ERROR_MODAL,
    errorModal: true,
  };
}
export function closeErrorModal() {
  return {
    type: CLOSE_ERROR_MODAL,
    errorModal: false,
  };
}
