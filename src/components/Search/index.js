import { useState } from 'react';
import './style.css';
import icSearch from 'assets/search.svg';
import { useKeywordValue } from 'hooks/useKeywordValue';

export default function Search({
  placeholder
}) {
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
    <form onSubmit={handleOnSearch} className="header__form">
      <div className="input__container">
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleOnChange}
          className="input"
          value={searchValue}
        />
        <button className="input__button">
          <img src={icSearch} height={20} width={20} />
        </button>
      </div>
    </form>
  );
}
