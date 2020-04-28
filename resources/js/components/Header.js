import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/header.css";

class Header extends React.Component {
    render() {
        return(
            <div className="header flex justifyc alignc">
                <div className='texto izquierda'>
                    <Link to={"/" + this.props.left}><h3>{this.props.left}</h3></Link>
                </div>
                <div className='texto derecha'>
                    <Link to={"/" + this.props.right}><h3>{this.props.right}</h3></Link>
                </div>
            </div>
        );
    }
}

export default Header;