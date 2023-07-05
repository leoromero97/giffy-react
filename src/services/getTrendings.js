import { API_KEY, API_URL } from "../constants/api";

export const apiResponseToTrendings = apiResponse => {
  const { data } = apiResponse;
  return data;
}

export default function getTrendings() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error HTTP: ' + res.status);
      }
      return res.json();
    })
    .then(apiResponseToTrendings);
}
