export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_COUNTRY_DETAILS_SUCCESS = "GET_COUNTRY_DETAILS_SUCCESS";

export function getCountryDetails(country) {
  console.log("Action", country);
  return {
    type: GET_COUNTRY_DETAILS,
    country,
  };
}

export function getCountryDetailsSuccess(data) {
  return {
    type: GET_COUNTRY_DETAILS_SUCCESS,
    payload: {
      data: data,
    },
  };
}
