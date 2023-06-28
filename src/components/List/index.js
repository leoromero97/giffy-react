function List({ gifs }) {
  return (
    <div>
      <ul>
        {gifs?.map(({id, title, url}) => {
          return (
          <li key={id}>
            <img src={url} alt={title} />
            <span>{title}</span>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default List;
