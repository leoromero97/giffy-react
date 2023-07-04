import List from '../../components/List';
import Header from '../../components/Header';
import { useKeywordValue } from '../../hooks/useKeywordValue';
import { useGifs } from '../../hooks/useGifs';
import './style.css';

export default function HomePage() {
  const { keywordValue } = useKeywordValue();
  const { gifs } = useGifs({ keyword: keywordValue });

  return (
    <section className="section__home">
      <Header showSearcher />
      <h1 className="section__home--title">Ultimas busquedas</h1>
      <List gifs={gifs} className="section__home--list" />
    </section>
  );
}
