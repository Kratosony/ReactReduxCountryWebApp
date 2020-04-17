export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_COUNTRY_DETAILS_SUCCESS = "GET_COUNTRY_DETAILS_SUCCESS";

export function getCountryDetails(userCountryInput) {
  return {
    type: GET_COUNTRY_DETAILS,
    userCountryInput,
  };
}

export function getCountryDetailsSuccess(data) {
  return {
    type: GET_COUNTRY_DETAILS_SUCCESS,
    countryData: data,
    countryModal: true,
  };
}
