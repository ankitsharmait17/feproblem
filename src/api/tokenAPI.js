import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://findfalcone.herokuapp.com/token";

export function getToken() {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(handleResponse)
    .catch(handleError);
}
