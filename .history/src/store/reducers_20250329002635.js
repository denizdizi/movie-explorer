import { SET_PAGE, SET_FORM_DATA, SET_MOVIE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./actions";

const initialState = {
  formData: {
    query: "pokemon",
    type: "",
    year: "",
    page: 1,
  },
  movies: [],
  totalResults: "0",
  currentPage: 1,
  loading: false,
  error: null,
  searchQuery: "pokemon",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_FORM_DATA:
        return {
          ...state,
          formData: { ...state.formData, ...action.payload }, // Form verilerini günceller
        };
      case SET_FORM_DATA:
        return {
          ...state,
          selectedMovie: action.payload, // Form verilerini günceller
        };
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload.movies, totalResults: action.payload.totalResults };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
