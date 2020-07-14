import React from 'react';
import './Modal.css';
import {Button} from '../Buttons';

export const Modal = ({onClick,sentEmail}) => {

    const showMessageEmail = () => {
        if(sentEmail) {
            return(
                <p className='text-modal'>THANKS FOR SAYNG HELLO!</p>
            )
        } else {
            return (
                <>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>!OOPS</p>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>SOMETHING WENT WRONG</p>
                    <p className='text-modal'>CHECK DETAILS</p>
                </>
            )
        }
    }
    return(
        <div className="overlay">
        <div className="modal flex alignc">
            {
                showMessageEmail()
            }
            <br />
            <Button text={sentEmail ? 'HOME' : 'RETRY'} type='button' clase='modal-button' onClick={onClick}/>
        </div>
    </div>
    )
}
    
