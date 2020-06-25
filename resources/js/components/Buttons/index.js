import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export const Button = ({text, type, clase, onClick}) => {
    return (
        <button type={type} className={clase} onClick={onClick}>
            {
                text === 'HOME' ?  <Link to="/home">{text}</Link> : text
            }
        </button>
    )
}