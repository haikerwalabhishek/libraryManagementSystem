import { useLocation } from 'react-router-dom';
import "./notfound.css"

const NotFound = () => {
  const location = useLocation();
  const errorMessage = `Sorry, the page "${location.pathname}" does not exist.`; 

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">{errorMessage}</p>
        <a href="/" className="back-home-button">Go Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
