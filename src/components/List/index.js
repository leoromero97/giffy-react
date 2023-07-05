import GifCard from 'components/GifCard';
import './style.css';

export default function List({ gifs }) {
  return (
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
  );
}
