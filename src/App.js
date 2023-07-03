import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import { KeywordValueProvider } from './context/keywordValueContext';

function App() {
  return (
    <KeywordValueProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} Component={HomePage} />
          <Route path={ROUTES.DETAIL} Component={DetailPage} />
        </Routes>
      </BrowserRouter>
    </KeywordValueProvider>
  );
}

export default App;
