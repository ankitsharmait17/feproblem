import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://findfalcone.herokuapp.com/planets";

export function getPlanets() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
