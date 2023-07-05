import { useContext, useEffect, useState } from "react";
import getGifs from 'services/getGifs';
import { GifsContext } from 'context/gifsContext';

export function useGifs({ keyword } = { keyword: 'null' }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, limit: 25 }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);

  return { gifs, loading };
}
