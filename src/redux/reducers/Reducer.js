import { createSlice } from "@reduxjs/toolkit";

export const getCreataDataSlice = createSlice({
  name: "country",
  initialState: {
    data: [],
    Region_data: [],
    Single_country_data: [],
    Single_country_languages: [],
    Single_country_borders: [],
    Single_country_currencies: [],
    Single_country_topLevelDomain: [],
    countries_border: [],
    loading: false,
    error: null,
  },
  reducers: {
    getDataStart: (state) => {
      // this method will start the loading
      state.loading = true;
      state.error = null;
    },
    getCountriesDetails: (state, action) => {
      // this method will help to get all countries details
      state.loading = false;
      state.data = action.payload;
    },
    getSingleCountry: (state, action) => {
      // this method helps to get single country details
      state.loading = false;
      state.Single_country_data = action.payload;
      state.Single_country_languages = action.payload.languages;
      // we have added a logic here, if the country have border then it will show the country code array otherwise we will send the empty arrya because the country have no border countries send no data related to it
      state.Single_country_borders = action.payload.borders
        ? action.payload.borders
        : [];
      state.Single_country_currencies = action.payload.currencies;
      state.Single_country_topLevelDomain = action.payload.topLevelDomain;
    },
    getBordersDetails: (state, action) => {
      // this method gets the details of the border countries
      state.loading = false;
      state.countries_border = action.payload;
    },
    getDataFailure: (state, action) => {
      //  this methos works only ib case of backend error
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
// here we are exporting all the slice methods actions
export const {
  getDataStart,
  getSingleCountry,
  getBordersDetails,
  getCountriesDetails,
  getDataFailure,
} = getCreataDataSlice.actions;
// Exporting the all countries data
export const showData = (state) => state.country.data;
// Exporting the single country details
export const singleCountryDetails = (state) =>
  state.country.Single_country_data;
// Exporting the single country languages array
export const singleCountrylanguages = (state) =>
  state.country.Single_country_languages;
// Exporting the single country border countries code names array
export const singleCountryborders = (state) =>
  state.country.Single_country_borders;
//  Exporting the single country top level domain
export const singleCountryTopLevelDomain = (state) =>
  state.country.Single_country_topLevelDomain;
// exporting single country currencies array
export const singleCountryCurrencies = (state) =>
  state.country.Single_country_currencies;
//  exporting countries border countries details to get full name of respective countries
export const countriesBorder = (state) => state.country.countries_border;
//  exporting the loaging
export const loading = (state) => state.country.loading;
// exporting the error
export const error = (state) => state.country.error;
export default getCreataDataSlice.reducer;