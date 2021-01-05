import * as types from "./types";

export const fetchList = () => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    blocking: true,
    method: "GET",
  },
});
