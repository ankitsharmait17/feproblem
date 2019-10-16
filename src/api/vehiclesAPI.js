import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://findfalcone.herokuapp.com/vehicles";

export function getVehicles() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
