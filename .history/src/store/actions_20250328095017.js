import axios from "axios";

const API_KEY = "df54e6ed";
const BASE_URL = "http://www.omdbapi.com/";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMovies = (query = "pokemon", type = "", year = "") => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&t=${query}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.Search });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};
