import { useContext } from "react";
import { KeywordValueContext } from '../context/keywordValueContext';

export default function useKeywordValue() {
  const { keyword, setKeyword } = useContext(KeywordValueContext);
  const keywordValue = keyword.toLowerCase();

  return { keywordValue, setKeyword  };
}
