import { useEffect, useState } from 'react';
import './style.css';
import icSearch from 'assets/search.svg';
// import icTrash from 'assets/trash.svg';

export default function Search({ placeholder, handleOnChange, onSubmit, value }) {
  const [icon, setIcon] = useState(icSearch);
  const [isFocus, setIsFocus] = useState(false);

  const hasValue = value !== '';
  const isTrash = hasValue && isFocus;

  useEffect(() => {
    if (isTrash) {
      // cambiar por icTRash
      setIcon(icSearch);
    } else {
      setIcon(icSearch);
    }
  }, [isTrash]);
  
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

/*   const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isTrash) {
      // Comunica el cambio al componente padre si es necesario
      // Por ejemplo, si el componente padre necesita actualizar el estado del valor
      // puedes hacer algo como:
      // setValue('');
      // handleOnChange('');
    } else {
      onSubmit();
    }
  }; */

  return (
    <div className="input__container">
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleOnChange}
        className="input"
        value={value}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <button className="input__button" onClick={onSubmit}>
        <img src={icon} height={20} width={20} />
      </button>
    </div>
  );
}
