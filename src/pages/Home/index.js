import CategoryList from 'components/CategoryList';
import Header from 'components/Header';
import List from 'components/List';
import { useGifs } from 'hooks/useGifs';
import { useGetTrendings } from 'hooks/useGetTrendings';
import { useKeywordValue } from 'hooks/useKeywordValue';
import './style.css';

export default function HomePage() {
  const { keywordValue } = useKeywordValue();
  const { gifs } = useGifs({ keyword: keywordValue });
  const { trends } = useGetTrendings();

  return (
    <section className="section__home">
      <Header showSearcher />
      <h1 className="section__home--title">Ultimas busquedas</h1>
      <div className="section__home--container-lists">
        <List gifs={gifs} className="section__home--list" />
        <CategoryList title="Tendencias" options={trends} />
      </div>
    </section>
  );
}
