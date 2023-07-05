import { Link } from "react-router-dom";
import "./style.css";

export default function CategoryList({ title, options }) {
  return (
    <div className="category">
      <span className="category__title">
        {title}
      </span>
      <ul className="category__list">
        {options.map((option) => (
          <li key={option}>
            <Link
              to={`/search/${option}`}
              className="category__list--item"
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}