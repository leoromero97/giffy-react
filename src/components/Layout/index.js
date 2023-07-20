import Navbar from 'components/Navbar';
import './style.css';

export default function Layout({ children, showSearcher }) {
  return (
    <div className="main-container">
      <Navbar showSearcher={showSearcher} />
      <div className="container-children">
        {children}
      </div>
    </div>
  );
}
