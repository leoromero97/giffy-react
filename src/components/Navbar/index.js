import { Link } from 'react-router-dom';
import Search from 'components/Search';
import { ROUTES } from 'constants/routes';
import logo from 'assets/logo-reagif.svg';
import icGithub from 'assets/icGithub-alt.svg';
import './style.css';

export default function Navbar({ showSearcher = false }) {
  return (
    <nav className="header">
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="Logo Reagif" className="header__logo" />
      </Link>
      {showSearcher && (
        <Search 
          placeholder="Escribe el gif que buscas"
        />
      )}
      <a
        href="https://github.com/leoromero97/giffy-react"
        title="Ir al repositorio"
        target="_blank"
        className="header__github--link"
      >
        <img src={icGithub} alt="Icono GitHub" />
        <span className="header__github--text">Ver repositorio</span>
      </a>
    </nav>
  );
}
