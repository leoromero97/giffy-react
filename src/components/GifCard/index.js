import { Link } from 'react-router-dom';
import './style.css';

export default function GifCard({ id, title, url }) {
  /*
     const cardStyle = {
      backgroundImage: `url(${url})`,
    }; */

  return (
    <div className="card">
      <Link to={`/gif/${id}`} className="card__link" /* style={cardStyle} */ title={title}>
        <span className="card__text">{title}</span>
        <img src={url} alt={title} className='card__image' loading='lazy' />
      </Link>
    </div>
  );
}
