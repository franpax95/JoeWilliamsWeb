import React from 'react';

export const Input = ({name,value,type='text',placeHolder}) => {
    return(
        <input 
            className=''
            type ={type} 
            name={name}
            value={value}
            placeholder={placeHolder} required/>
    )
}

export const TextArea = ({}) => {

}