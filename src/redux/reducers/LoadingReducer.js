import { DISPLAY_LOALDING, HIDE_LOALDING } from "../actions/types/LoadingType";

const initialState = {
  isLoading: false,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOALDING:
      state.isLoading = true;
      return { ...state };

    case HIDE_LOALDING:
      state.isLoading = false;
      return { ...state };

    default:
      return { ...state };
  }
};
