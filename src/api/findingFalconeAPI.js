import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://findfalcone.herokuapp.com/find";

export function findfalcone(data) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(handleResponse)
    .catch(handleError);
}
