import { useEffect, useState } from "react";
import { useGifs } from "./useGifs";
import { useKeywordValue } from "./useKeywordValue";

export function useFindGif({ id }) {
  const { keywordValue: keywordValueByGif } = useKeywordValue();
  const { gifs } = useGifs({ keyword: keywordValueByGif });
  const [gif, setGif] = useState({});

  useEffect(() => {
    gifs.find((singleGif) => {
      if (singleGif?.id !== id) return;
      setGif(singleGif);
    });
  }, [gifs])

  const { id: gifId, title, url } = gif;

  return { gifId, title, url, keywordValueByGif }
}
