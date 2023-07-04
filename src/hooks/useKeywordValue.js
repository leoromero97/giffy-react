import { useContext } from "react";
import { KeywordValueContext } from '../context/keywordValueContext';

export function useKeywordValue() {
  const { keyword, setKeyword } = useContext(KeywordValueContext);
  const keywordValue = keyword.toLowerCase() || 'random';

  return { keywordValue, setKeyword };
}
