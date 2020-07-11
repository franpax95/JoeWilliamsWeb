import React, { useState, useRef } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';

import { MdMenu, MdClose } from 'react-icons/md';

import './Navbar.css';

const Navbar = (props) => {
    const { pathname } = props.location;
    const isWhiteColor = (pathname.toLowerCase() === "/home" || pathname === "/") ? true : false;

    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);


    const toggleNavbarEffect = () => {
        navbarRef.current.style.opacity = '0';

        setTimeout(() => {
            setIsOpen(!isOpen);
            navbarRef.current.style.opacity = '1';
        }, 300);
    }
    
    const renderClosedNavbar = () => (
        <button className="open" onClick={() => toggleNavbarEffect()}>
            <MdMenu />
        </button>
    );

    const renderOpenedNavbar = () => (<>
        <button className="close" onClick={() => toggleNavbarEffect()}>
            <MdClose />
        </button>
        <Link to="/projects" onClick={() => toggleNavbarEffect()}>Projects</Link>
        <Link to="/contact" onClick={() => toggleNavbarEffect()}>Contact</Link>
        <Link to="/about" onClick={() => toggleNavbarEffect()}>About</Link>
    </>);



    return (
        <div className={`Navbar ${(isWhiteColor) ? 'white' : 'black'}`} ref={navbarRef}>
            {(isOpen) ? renderOpenedNavbar() : renderClosedNavbar()}
            
        </div>
    );
}

export default withRouter(Navbar);
