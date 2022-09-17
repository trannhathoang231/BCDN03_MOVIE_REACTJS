import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDungReducer';
import { QuanLyDatVeReducer } from './QuanLyDatVeReducer';
import { LoadingReducer } from './LoadingReducer';
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  QuanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
  QuanLyPhimReducer,
});
