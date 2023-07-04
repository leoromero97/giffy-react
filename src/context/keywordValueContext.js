import { createContext, useState } from 'react';

export const KeywordValueContext = createContext({
  keyword: localStorage.getItem('lastKeyword') || 'random',
  setKeyword: () => { },
});

export const KeywordValueProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(localStorage.getItem('lastKeyword') || 'random');

  return (
    <KeywordValueContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </KeywordValueContext.Provider>
  );
};
