import Header from 'components/Header';
import './style.css';

export default function Layout({ children, showSearcher }) {
  return (
    <div className="main-container">
      <Header showSearcher={showSearcher} />
      {children}
    </div>
  );
}