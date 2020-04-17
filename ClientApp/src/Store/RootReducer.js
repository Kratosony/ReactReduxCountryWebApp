import { combineReducers } from "redux";
import countryReducer from "./Reducers/CountryReducer";

export default combineReducers({
  country: countryReducer,
});
