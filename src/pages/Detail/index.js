import { useParams } from 'react-router';
import Header from '../../components/Header';
import { useFindGif } from '../../hooks/useFindGif';
import './style.css';

export default function DetailPage() {
  const { id } = useParams();
  const { gifId, title, url, keywordValueByGif } = useFindGif({ id });

  return (
    <section className="section__detail">
      <Header />
      <img key={gifId} src={url} width={290} />
      <span>
        El titulo del Gif es: {title}
      </span>
      <span>
        Buscaste gifs de {keywordValueByGif}
      </span>
    </section>
  );
}
