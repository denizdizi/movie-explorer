import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./reducers";

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
