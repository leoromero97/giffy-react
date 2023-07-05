import List from "components/List";
import { useGifs } from "hooks/useGifs";
import { useParams } from "react-router-dom";
import './style.css'

export default function SearcherPage() {
  const { keyword } = useParams();
  const title = decodeURI(keyword);
  const { gifs } = useGifs({ keyword: keyword });

  return (
    <div className="section-searcher">
      <h1>{title}</h1>
      {gifs && <List gifs={gifs} />}
    </div>
  );
}