import { useEffect, useState } from 'react';
import GifCard from '../GifCard';
import getGifs from '../../services/getGifs';
import './style.css';

export default function List({ keyword }) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
    });
  }, [keyword]);

  return (
    <div className="list__container">
      <ul className="list">
        {gifs?.map(({ id, title, url }) => (
          <li key={id} className='list__item'>
            <GifCard
              title={title}
              url={url}
              id={id}
            />
          </li>
        ))
        }
      </ul>
    </div>
  );
}
