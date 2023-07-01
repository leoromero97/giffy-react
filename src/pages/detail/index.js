import { useState } from 'react';
import Search from '../../components/Search';
import './style.css';

export default function DetailPage({params}) {
  console.log(params);
  const [keyword, setKeyword] = useState('marvel');
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleOnSearch = (e) => {
    e.preventDefault();
    setKeyword(searchValue);
  }

  return (
    <section className="section__home">
      <h1 className="section__home--title">Giffy React</h1>
      <form onSubmit={handleOnSearch} className="section__home--form">
        <Search
          handleOnChange={handleOnChange}
          placeholder="Escribe el gif que buscas"
          onSubmit={handleOnSearch}
          value={searchValue}
        />
      </form>
      <span>
        {params}
      </span>
    </section>
  );
}
