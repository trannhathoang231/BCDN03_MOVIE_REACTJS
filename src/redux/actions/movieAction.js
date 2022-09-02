import { movieServices } from "../../services/movieServices";
import {
  MOVIE_FETCH_FAIL,
  MOVIE_START_FETCH,
  MOVIE_SET_LIST_MOVIE
} from "../types/movieType";

const startFetch = () => {
  return {
    type: MOVIE_START_FETCH,
  };
};
const fetchFail = (error) => {
  return {
    type: MOVIE_FETCH_FAIL,
    data: error
  };
};

export const getAllMovies = async (dispatch) => {
  try {
    dispatch(startFetch());
    const res = await movieServices.getAllMovies();
    dispatch({
      type: MOVIE_SET_LIST_MOVIE,
      data: res
    });
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
