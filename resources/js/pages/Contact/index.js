import React from 'react';
import './Contact.css'
import Form from '../../components/Form';
import {SpaceBetween} from '../../components/SpaceBetween';

const Contact = () => {

    const onSubmit = () => {
        console.log('submit');
    }

    return (
        <div className="Contact-Container flex justifyc">
            <SpaceBetween height="35vh" />
            <Form onSubmit={onSubmit}/>
        </div>
    );
}

export default Contact;