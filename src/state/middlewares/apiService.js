import { fetch } from "../utils";

const baseUrl = "https://gateway.marvel.com/v1/public/characters?apikey=60f6bfe4b657808d08e39a91de938bd8&limit=15&hash=c7d257bbf9727aaec8683e65febf710f&ts=1609763627";

const apiService = () => (next) => (action) => {
  const result = next(action);
  if (!action.meta.async) {
    return result;
  }

  const { path= '', method = "GET", body } = action.meta;

  const url = `${baseUrl}${path}`;

   // Call to API
   return fetch(url, method, body).then(
    (res) => handleResponse(res, action, next),
    (err) => handleErrors(err, action, next)
  );
};

export default apiService;

function handleErrors(err, action, next) {
  // if request fails, dispatch _FAILED action to handle the error in reducer
  next({
    type: `${action.type}_FAILED`,
    payload: err,
    meta: action.meta,
  });

  return Promise.reject(err);
}

function handleResponse(res, action, next) {
  // if request success, dispatch _COMPLETE action to update the state in reducer
  next({
    type: `${action.type}_COMPLETED`,
    payload: res,
    meta: action.meta,
  });

  return res;
}