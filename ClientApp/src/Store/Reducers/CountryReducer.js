import {
  GET_COUNTRY_DETAILS,
  GET_COUNTRY_DETAILS_SUCCESS,
} from "../Actions/CountryActions";

const initialState = {
  country: "",
  data: {},
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_DETAILS:
      return Object.assign({}, state, {
        country: action.country,
      });
    case GET_COUNTRY_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
      });
    default:
      return state;
  }
}
