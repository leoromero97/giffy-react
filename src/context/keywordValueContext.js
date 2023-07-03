import { createContext, useState } from 'react';

export const KeywordValueContext = createContext({
  keyword: 'marvel',
  setKeyword: () => { },
});

export const KeywordValueProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('marvel');

  return (
    <KeywordValueContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </KeywordValueContext.Provider>
  );
};