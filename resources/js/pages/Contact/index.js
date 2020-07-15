import React, {useState,useEffect } from 'react';
import './Contact.css'
import Form from '../../components/Form';
import axios from 'axios';
import {SpaceBetween} from '../../components/SpaceBetween';
import {Modal} from '../../components/Modal';
import { Link } from 'react-router-dom';
import { update } from 'lodash';


const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {setWidth(window.innerWidth)}

    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [sentEmail, setsentEmail] = useState(false);

    useEffect(() => {
       window.addEventListener('resize', updateWidth)
    });

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
            setsentEmail(true)
            setShowSpinner(false)
            setShowModal(true)
        }, 1000);
    }

    const sendEmail = () => {
        axios.post('/api/sendMail', form).then( resp => {
            setsentEmail(true)
            setShowSpinner(false)
            setShowModal(true)
         }).catch((error) => {
             setsentEmail(false)
             setShowSpinner(false)
             setShowModal(true)
         })
    }

    return(
        <div className="Contact-Container flex justifyc">
            {
                showModal ? <Modal sentEmail={false}/> : ''
            }
            <SpaceBetween height="45vh" />
            <Form onSubmit={hadleSubmit} onChange={handleInputChange} showSpinner={showSpinner} screenWidth={width}/>
        </div>
    );
}

export default Contact;