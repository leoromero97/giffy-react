import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
import Layout from 'components/Layout';
import List from 'components/List';
import LazyTrending from 'components/LazyTrendingSearches';
import { useGifs } from 'hooks/useGifs';
import { useKeywordValue } from 'hooks/useKeywordValue';
import { useIntersectionNearScreen } from 'hooks/useNearScreen';
import './style.css';

export default function HomePage() {
  const externalRef = useRef();
  const { keywordValue } = useKeywordValue();
  const { gifs, loading, setPage } = useGifs({ keyword: keywordValue });
  const { isNearScreen } = useIntersectionNearScreen({ externalRef: loading ? null : externalRef, isOnced: false });
  const debounceRefNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 500), []);

  useEffect(() => {
    if (isNearScreen) debounceRefNextPage();
  }, [isNearScreen, debounceRefNextPage]);

  return (
    <Layout showSearcher>
      <h1 className="section__home--title">Últimas búsquedas</h1>
      <div className="section__home--container-lists">
        <List gifs={gifs} className="section__home--list" />
        <LazyTrending />
      </div>
      <div id="endVisor" ref={externalRef}></div>
    </Layout>
  );
}
