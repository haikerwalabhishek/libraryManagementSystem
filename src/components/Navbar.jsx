import { Link } from 'react-router-dom';
import Searchbar from './Searchbar.jsx';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="NavTitle">
      <p>KITAB</p>
      </div>
      <Searchbar/>
      <div className="NavLinks">
        <Link to="/">Home</Link>
        <Link to="/browseBooks">Browse</Link>
        <Link to="/addBook">Add</Link>
      </div>
    </div>
  )
}

export default Navbar;