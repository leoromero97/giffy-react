import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from './pages/home';
import DetailPage from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} Component={HomePage} />
        <Route path={ROUTES.DETAIL} Component={DetailPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
