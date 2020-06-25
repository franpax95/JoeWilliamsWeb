import React from 'react';
import './Input.css';

export const Input = ({name,value,type='text',placeholder}) => {
    return(
        <input 
            className=''
            type ={type} 
            name={name}
            value={value}
            placeholder={placeholder} required/>
    )
}

export const TextArea = ({name,value,placeholder}) => {
    return(
        <textarea  
            className=''
            name={name}
            value={value}
            placeholder={placeholder} required>
        </textarea>   
    )
}