import React, {useState} from 'react';
import './Contact.css'
import Form from '../../components/Form';
import axios from 'axios';
import {SpaceBetween} from '../../components/SpaceBetween';
import {Modal} from '../../components/Modal';
import { Link } from 'react-router-dom';


const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const hadleSubmit = (event) => {
        event.preventDefault();
        setShowSpinner(true)
        
        // sendEmail();

        setTimeout(() => {
        setEmailSent(true)
        setShowSpinner(false)
        setShowModal(true)
        },1000)   
    }

    const sendEmail = () => {
        axios.post('/api/sendMail', form).then( resp => {
            setEmailSent(true)
            setShowSpinner(false)
            setShowModal(true)
         }).catch((error) => {
             setEmailSent(false)
             setShowSpinner(false)
             setShowModal(true)
         })
    }

    return(
        <div className="Contact-Container flex justifyc">
            {
                showModal ? <Modal 
                                text={emailSent ? 'THANKS FOR SAYNG HELLO!' : 'OOPS SOMETHING WENT WRONG PLEASE CHECK DETAILS'} 
                                emailSent={emailSent}/> : ''
            }
            <SpaceBetween height="45vh" />
            <Form onSubmit={hadleSubmit} onChange={handleInputChange} showSpinner={showSpinner}/>
        </div>
    );
}

export default Contact;