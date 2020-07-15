import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export const Button = ({text, type, clase, onClick}) => {
    return (
        <button type={type} className={`${clase} alignc justifyc`} >
            {
                text === 'HOME' ?  <Link to="/home">{text}</Link> : <p>{text}</p>
            }
        </button>
    )
}