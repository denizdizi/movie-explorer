import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducers";

const rootReducer = combineReducers({
  movies: movieReducer,
  formData: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
