import {
  getBordersDetails,
  getCountriesDetails,
  getDataFailure,
  getDataStart,
  getSingleCountry,
} from "../reducers/Reducer";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// get all countries data with the help of axios
export const getCountryAsync = (data) => async (dispatch) => {
  try {
    dispatch(getDataStart());
    const response = await axios.get(`${API_URL}${data.group}`);
    dispatch(getCountriesDetails(response.data));
  } catch (error) {
    dispatch(getDataFailure(error));
  }
};
// get single country data with the help of axios
export const getSingleCountryAsync = (data) => async (dispatch) => {
  try {
    dispatch(getDataStart());
    const response = await axios.get(`${API_URL}alpha/${data.details}`);
    dispatch(getSingleCountry(response.data));
  } catch (error) {
    dispatch(getDataFailure(error));
  }
};
// get border countries data with the help of axios
export const getBorderAsync = (data) => async (dispatch) => {
  const border = data.borders.toString();
  try {
    dispatch(getDataStart());
    const response = await axios.get(`${API_URL}alpha`, {
      params: { codes: border },
    });
    dispatch(getBordersDetails(response.data));
  } catch (error) {
    dispatch(getDataFailure(error));
  }
};