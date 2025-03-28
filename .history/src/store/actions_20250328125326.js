import { searchMovies } from "../utils/api";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMovies = (query = "pokemon", page = 1) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const data = await searchMovies(query, page);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: {movies: data.Search, totalResults: data.totalResults} });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

export const SET_PAGE = "SET_PAGE";

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
