import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import List from "components/List";
import { useGifs } from "hooks/useGifs";

export default function SearcherPage() {
  const { keyword } = useParams();
  const title = decodeURI(keyword);
  const { gifs } = useGifs({ keyword: keyword });

  return (
    <Layout>
      <h1>{title}</h1>
      {gifs && <List gifs={gifs} />}
    </Layout>
  );
}