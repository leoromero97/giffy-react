import { apiKey } from "../constants/api";

export default function getGifs({ keyword = 'avengers' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

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
