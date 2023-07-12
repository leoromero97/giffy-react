import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import debounce from "just-debounce-it";
import Layout from "components/Layout";
import List from "components/List";
import { useGifs } from "hooks/useGifs";
import { useIntersectionNearScreen } from "hooks/useNearScreen";

export default function SearcherPage() {
  const { keyword } = useParams();
  const externalRef = useRef();
  const title = decodeURI(keyword);
  const { gifs, loading, setPage } = useGifs({ keyword: keyword });
  const { isNearScreen } = useIntersectionNearScreen({ externalRef: loading ? null : externalRef, isOnced: false });
  const debounceRefNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 500), []);

  useEffect(() => {
    if (isNearScreen) debounceRefNextPage();
  }, [isNearScreen, debounceRefNextPage]);

  return (
    <Layout showSearcher>
      <h1>{title}</h1>
      {gifs && <List gifs={gifs} />}
      <div id="endVisor" ref={externalRef}></div>
    </Layout>
  );
}