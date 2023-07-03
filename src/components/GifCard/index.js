import { Link } from 'react-router-dom';
import './style.css';

export default function GifCard({ id, title, url }) {
  const cardStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <Link to={`/gif/${id}`} className="card" style={cardStyle} title={title}>
      <img src={url} alt={title} className='card__image' loading='lazy' />
      <span className="card__text">{title}</span>
    </Link>
  );
}

