import React from 'react';
import './styles/Contact.css';

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
                <div className="flex flex-col justifyc alignc divForm">
                <h1>SAY HELLO!</h1>
                     <form className='formContacto'>
                        <div className='divInput marginDiv flex'>
                                <label className='sizeTextContact flex'>NAME</label>
                                <input  className='textInput sizeTextInput'
                                        type ='text' 
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={this.handleChange.bind(this)} placeholder="Joe Williams" required/>
                        </div>
                        <div className='divInput marginDiv flex'>
                            <label className='sizeTextContact flex'>E-MAIL</label>
                            <input  className='textInput sizeTextInput'
                                    type ='email' 
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}  placeholder="jts.design@gmail.com" required/>
                        </div>
                        <div className='divInput marginDiv flex'>
                            <label className='sizeTextContact flex'>SUBJECT</label>
                            <input  className='textInput sizeTextInput'
                                    type ='text'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.handleChange.bind(this)} placeholder="Web design" required/>    
                        </div>
                        <div className='marginDiv flex'>
                            <label className='flex sizeTextContact'>MESSAGE</label>
                            <textarea   className='textInput sizeTextInput'
                                        name='message'
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this)} placeholder="Hello there" required></textarea>         
                        </div>
                    </form>
                    <input className='submit' type='submit' value='Submit' onClick={this.handleSubmit}/>    
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;