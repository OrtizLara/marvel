import * as types from "./types";
import { createReducer } from "../utils";

const charactersReducer = createReducer([])({
  [types.FETCH_LIST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [types.FETCH_LIST_COMPLETED]: (state, action) => {
    return {
      ...state,
      items: action.payload?.data?.results,
      loading: false
    };
  },
  [types.FETCH_LIST_FAILED]: (state, action) => {
    return {
      ...state,
      error: true,
      loading: false
  }}
});

export default charactersReducer;