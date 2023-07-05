import Header from 'components/Header';
import List from 'components/List';
import LazyTrending from 'components/LazyTrendingSearches';
import { useGifs } from 'hooks/useGifs';
import { useKeywordValue } from 'hooks/useKeywordValue';
import './style.css';

export default function HomePage() {
  const { keywordValue } = useKeywordValue();
  const { gifs } = useGifs({ keyword: keywordValue });

  return (
    <section className="section__home">
      <Header showSearcher />
      <h1 className="section__home--title">Ultimas busquedas</h1>
      <div className="section__home--container-lists">
        <List gifs={gifs} className="section__home--list" />
        <LazyTrending />
      </div>
    </section>
  );
}
