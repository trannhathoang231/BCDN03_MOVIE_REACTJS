import {
  MOVIE_START_FETCH,
  MOVIE_FETCH_FAIL,
  MOVIE_SET_LIST_MOVIE,
} from "../types/movieType";
const initState = {
  listMovie: [],
  loading: false,
  error: null,
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVIE_START_FETCH: {
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case MOVIE_FETCH_FAIL: {
      state.loading = false;
      state.error = action.data;
      return { ...state };
    }
    case MOVIE_SET_LIST_MOVIE: {
      state.loading = false;
      state.listMovie = [...action.data];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
