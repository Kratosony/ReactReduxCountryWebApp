import {
  GET_COUNTRY_DETAILS_SUCCESS,
  CLOSE_COUNTRY_MODAL,
  OPEN_ERROR_MODAL,
  CLOSE_ERROR_MODAL,
} from "../Actions/CountryActions";

const initialState = {
  countryModal: false,
  errorModal: false,
  countryData: [],
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        countryData: action.countryData,
        countryModal: action.countryModal,
      });
    case CLOSE_COUNTRY_MODAL:
      return Object.assign({}, state, {
        countryModal: action.countryModal,
      });
    case OPEN_ERROR_MODAL:
    case CLOSE_ERROR_MODAL:
      return Object.assign({}, state, {
        errorModal: action.errorModal,
      });
    default:
      return state;
  }
}
