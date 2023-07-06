import Layout from 'components/Layout';
import List from 'components/List';
import LazyTrending from 'components/LazyTrendingSearches';
import Paginator from 'components/Paginator';
import { useGifs } from 'hooks/useGifs';
import { useKeywordValue } from 'hooks/useKeywordValue';
import './style.css';

export default function HomePage() {
  const { keywordValue } = useKeywordValue();
  const { gifs, setPage } = useGifs({ keyword: keywordValue });

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <Layout>
      <h1 className="section__home--title">Últimas búsquedas</h1>
      <div className="section__home--container-lists">
        <List gifs={gifs} className="section__home--list" />
        <LazyTrending />
      </div>
      <Paginator
        onNextPage={handleNextPage}
        nextText="Ver siguientes gifs"
      />
    </Layout>
  );
}
