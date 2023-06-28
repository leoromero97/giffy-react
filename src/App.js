import './App.css';
import { useEffect, useState } from 'react';
import getGifs from './services/getGifs';
import List from './components/List';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: 'hulk' }).then((gifs) => setGifs(gifs))
  }, []);
  return (
    <section className="App">
      <List gifs={gifs} />
    </section>
  );
}

export default App;
