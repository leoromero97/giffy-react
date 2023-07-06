import icNext from 'assets/icon-arrow-right.svg';
import './style.css';

export default function Paginator({ backText, nextText, onNextPage }) {
  return (
    <div className="paginator">
      {backText && (
        <button className="paginator__button">
          <img src="" alt="Icono para volver a la pagina anterior" />
          <span className="paginator__text">
            {backText}
          </span>
        </button>
      )}
      {nextText && (
        <button className="paginator__button" onClick={onNextPage}>
          <span className="paginator__text">
            {nextText}
          </span>
          <img src={icNext} alt="Icono para avanzar a la pagina siguiente" height={16} width={16} />
        </button>
      )}
    </div>
  )
}