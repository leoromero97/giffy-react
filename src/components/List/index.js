import GifCard from '../GifCard';
import './style.css';

export default function List({ gifs }) {
  return (
    <div className="list__container">
      <div className="list">
        {gifs && gifs?.map(({ id, title, url }) => (
          <GifCard
            key={id}
            title={title}
            url={url}
            id={id}
          />
        ))
        }
      </div>
    </div>
  );
}
