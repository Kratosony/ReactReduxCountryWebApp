import { combineReducers } from "redux";
import countryReducer from "./Reducers/CountryReducer";

/*
naming convention for state properties and their reducers: property : propertyReducer
Reducers should be split into project areas using nested combineReducers({})
*/

export default combineReducers({
  country: countryReducer,
});
