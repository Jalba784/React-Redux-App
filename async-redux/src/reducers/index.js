import {
  FETCH_STAR_START,
  FETCH_STAR_SUCCESS,
  FETCH_STAR_ERROR
} from "../actions";

const initialState = {
  character: null,
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAR_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_STAR_SUCCESS: {
      return {
        ...state,
        character: action.payload,
        isLoading: false
      };
    }
    case FETCH_STAR_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
