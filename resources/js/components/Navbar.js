import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./styles/Navbar.css";

const Navbar = () => {
    const [classname, setClassname] = useState('none');

    const toggleNavbar = (e) => {
        /* toggle icon */
        e.currentTarget.children[0].classList.toggle("fa-bars");
        e.currentTarget.children[0].classList.toggle("fa-close");
        
        /* toggle Navbar class */
        if(classname === 'none'){ setClassname('visible'); }
        else{ setClassname('none'); }
    }

    return(
        <React.Fragment>
            {/*toggle with 'fa fa-close' */}
            <button onClick={toggleNavbar} className="icon">
                <i className="fa fa-bars position-top-right"></i>
            </button>

            {/*toggle with visible*/}
            <div className={`Navbar ${classname}`}>
                <Link to="">Projects</Link>
                <Link to="">Contact</Link>
                <Link to="">About</Link>
            </div>
        </React.Fragment>
        
    )
}

export default Navbar;