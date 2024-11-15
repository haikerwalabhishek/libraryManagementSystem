import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Searchbar from './Searchbar,jsx';
import "./mobileNavbar.css";

const MobileNavbar = () => {
    //manageing hamburger state
    const [isOpen, setIsOpen] = useState(false);

    // function to change isOpen value for conditional rendering
    const toggleNavbar= ()=>{
        setIsOpen(!isOpen)
    };

    return (
        <>
            <div className="mobileNavbarContainer">
                <div className="mobileNavTitle">
                    <p>KITAB</p>
                    <button className='hamburgerIconMobile' onClick={toggleNavbar}>
                        {isOpen?<FaTimes/>:<FaBars/>}
                    </button>
                </div>
                {isOpen && (
                    <div className="mobileNavLinks">
                        <Link to="/" onClick={toggleNavbar}>Home</Link>
                        <Link to="/browseBooks" onClick={toggleNavbar}>Browse</Link>
                        <Link to="/addBook" onClick={toggleNavbar}>Add</Link>
                    </div>
                )}
            </div>
            <div className="searchMobile">
                <Searchbar/>
            </div>
        </>
    );
};

export default MobileNavbar;
