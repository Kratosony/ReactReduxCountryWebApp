import {
  GET_COUNTRY_DETAILS,
  GET_COUNTRY_DETAILS_SUCCESS,
} from "../Actions/CountryActions";

const initialState = {
  countryModal: false,
  countryData: [],
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_DETAILS_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        countryData: action.countryData,
        countryModal: action.countryModal,
      });
    default:
      return state;
  }
}
