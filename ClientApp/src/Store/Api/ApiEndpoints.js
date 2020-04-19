/* Country Endpoints */
export const GET_COUNTRY_DETAILS_URL = (country, fullNameSearch) =>
  `https://restcountries.eu/rest/v2/name/${country}?fullText=${fullNameSearch}`;
//export const GET_ALL_COUNTRIES = "https://restcountries.eu/rest/v2/all";
