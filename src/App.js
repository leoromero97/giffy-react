import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import { KeywordValueProvider } from './context/keywordValueContext';
import { GifsContextProvider } from './context/gifsContext';

function App() {
  return (
    <GifsContextProvider>
      <KeywordValueProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} Component={HomePage} />
            <Route path={ROUTES.DETAIL} Component={DetailPage} />
          </Routes>
        </BrowserRouter>
      </KeywordValueProvider>
    </GifsContextProvider>
  );
}

export default App;
