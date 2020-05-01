import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import "./styles/Navbar.css";

const Navbar = () => {
    const [classname, setClassname] = useState('none');
    const iconRef = useRef(null);

    const toggleNavbar = () => {
        /* toggle icon */
        iconRef.current.classList.toggle("fa-bars");
        iconRef.current.classList.toggle("fa-close");
        
        /* toggle Navbar class */
        if(classname === 'none'){ setClassname('visible'); }
        else{ setClassname('none'); }
    }

    return(
        <React.Fragment>
            {/*toggle with 'fa fa-close' */}
            <button onClick={toggleNavbar} className="icon">
                <i className="fa fa-bars position-top-right" ref={iconRef}></i>
            </button>

            {/*toggle with visible*/}
            <div className={`Navbar ${classname}`}>
                <Link to="/gallery" onClick={toggleNavbar}>Projects</Link>
                <Link to="" onClick={toggleNavbar}>Contact</Link>
                <Link to="/about" onClick={toggleNavbar}>About</Link>
            </div>
        </React.Fragment>
        
    )
}

export default Navbar;