import React from 'react';
//import { Link } from 'react-router-dom';

import './styles/Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        this.sendMessage({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        })
        event.preventDefault();
    }
    sendMessage (object) {        
        window.emailjs.send('gmail','pruebatemplate',object)
        .then(res=> { alert('Email successfully sent!') })
        .catch(err => alert('Email failed.'));
    }
    render(){
        return(
            <React.Fragment>
                <Header 
                    left="Home"
                    right="About"
                />
                <div className="flex flex-col justifyc alignc divForm">
                     <form className='formContacto'>
                        <div className='namelastName flex'>
                            <div className='divName'>
                                <label className='textoLabel flex'>First Name*</label>
                                <input  className='allInputs'
                                        type ='text' 
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange.bind(this)} required/>
                            </div>
                            <div className='divName'>
                                <label className='textoLabel flex'>Last Name*</label>
                                <input  className='allInputs'
                                        type ='text' 
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={this.handleChange.bind(this)} required/>
                            </div>
                        </div>
                        <div className='restDiv'>
                            <label className='textoLabel flex'>Email*</label>
                            <input  className='allInputs'
                                    type ='email' 
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)} required/>
                        </div>
                        <div className='restDiv'>
                            <label className='textoLabel  flex'>Subject*</label>
                            <input  className='allInputs'
                                    type ='text'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.handleChange.bind(this)} required/>    
                        </div>
                        <div className='restDiv'>
                            <label className='textoLabel  flex'>Message*</label>
                            <textarea   className='allInputs txtarea'
                                        name='message'
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this)} required></textarea>
                        </div>
                        <input className='submit' type='submit' value='Submit' onClick={this.handleSubmit}/>
                    </form>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Contact;