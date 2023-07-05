import { API_KEY, API_URL } from "../constants/api";

export default function getGifs({ keyword = 'avengers', limit = 25 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  return fetch(apiURL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error HTTP: ' + res.status);
      }
      return res.json();
    })
      .then(response => {
        const { data } = response;
        const gifs = data?.map((gif) => {
          const {id, images, title} = gif;
          const { url } = images?.fixed_height_downsampled;
          return { id, url, title };
        });
        return gifs;
  });
}
