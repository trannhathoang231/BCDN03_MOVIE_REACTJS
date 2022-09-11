import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import {QuanLyRapReducer} from './reducers/QuanLyRapReducer'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)),
//   CarouselReducer
//   );


const rootReducer = combineReducers({
  CarouselReducer , 
  QuanLyPhimReducer,
  QuanLyRapReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk))