import { useParams } from 'react-router';
import './style.css';
import Header from '../../components/Header';
import useKeywordValue from '../../hooks/useKeywordValue';

export default function DetailPage() {
  const { id } = useParams();
  const { keywordValue } = useKeywordValue();

  return (
    <section className="section__detail">
      <Header />
      <span>
        Gif con id: {id}
      </span>
      <span>
       Buscaste gifs de {keywordValue}
      </span>
    </section>
  );
}
