import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";
export const rootReducer = combineReducers({
  movie: movieReducer,
  QuanLyPhimReducer
});
