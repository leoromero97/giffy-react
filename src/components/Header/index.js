import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import logo from '../../assets/logo-reagif.svg';
import icGithub from '../../assets/icGithub-alt.svg';
import { ROUTES } from '../../constants/routes';
import { useKeywordValue } from '../../hooks/useKeywordValue';
import './style.css';

export default function Header({ showSearcher = false }) {
  const { setKeyword } = useKeywordValue();
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleOnSearch = (e) => {
    e.preventDefault();
    setKeyword(searchValue);
  }

  return (
    <header className="header">
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="Logo Reagif" className="header__logo" />
      </Link>
      {showSearcher && (
        <form onSubmit={handleOnSearch} className="header__form">
          <Search
            handleOnChange={handleOnChange}
            placeholder="Escribe el gif que buscas"
            onSubmit={handleOnSearch}
            value={searchValue}
          />
        </form>
      )}
      <a
        href="https://github.com/leoromero97/giffy-react"
        title="Ir al repositorio"
        target="_blank"
        className="header__github--container"
      >
        <img src={icGithub} alt="Icono GitHub" />
        <span className="header__github--text">Ver repositorio</span>
      </a>
    </header>
  );
}
