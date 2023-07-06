import Header from 'components/Header';
import './style.css';

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <Header showSearcher />
      {children}
    </div>
  );
}