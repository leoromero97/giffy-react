import { useGifs } from "./useGifs";
import { useKeywordValue } from "./useKeywordValue";

export function useFindGif({ id }) {
  const { keywordValue: keywordValueByGif } = useKeywordValue();
  const { gifs } = useGifs({ keyword: keywordValueByGif });
  const gif = gifs.find(gif => gif.id === id);
  const { id: gifId, title, url } = gif;

  return { gifId, title, url, keywordValueByGif }
}
