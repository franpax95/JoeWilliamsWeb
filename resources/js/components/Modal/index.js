import React from 'react';
import './Modal.css';
import {Button} from '../Buttons';

export const Modal = ({onClick,text,emailSent}) => {
    return(
        <div className="overlay">
        <div className="modal flex alignc">
            <div className="text-modal">
                {text}
            </div>
            <br />
            <br />
            <Button text={emailSent ? 'HOME' : 'RETRY'} type='button' clase='modal-button' onClick={onClick}/>
        </div>
    </div>
    )
}
    
