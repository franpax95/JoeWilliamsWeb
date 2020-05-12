import React from 'react';
import './styles/Contact.css';
import axios from 'axios';
import Modal from './General/Modal';
import Loading from './General/Loading';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            showModal: false,
            showSpinner: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal   = this.closeModal.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        this.setState({
            showSpinner: true
        })

        axios.post('/api/sendMail', this.state).then( resp => {
           this.setState({
               showModal: true,
               showSpinner: false
           })
        }).catch((error) => {
            this.setState({
                showModal: true,
                showSpinner: false
            })
        })

        event.preventDefault();
    }

    showLoading() {
        return(
            <div className="overlay flex justifyc alignc flex-col">
                <Loading />
            </div>
        )
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="flex flex-col justifyc alignc divForm">
                <h1>SAY HELLO!</h1>
                    <form className='formContacto' onSubmit={this.handleSubmit}>
                        <div className='divInput marginDiv flex'>
                                <label className='sizeTextContact flex'>NAME</label>
                                <input  className='textInput sizeTextInput'
                                        type ='text' 
                                        name='name'
                                        value={this.state.lastName}
                                        onChange={this.handleChange} placeholder="Joe Williams" required/>
                        </div>
                        <div className='divInput marginDiv flex'>
                            <label className='sizeTextContact flex'>E-MAIL</label>
                            <input  className='textInput sizeTextInput'
                                    type ='email' 
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}  placeholder="jts.design@gmail.com" required/>
                        </div>
                        <div className='divInput marginDiv flex'>
                            <label className='sizeTextContact flex'>SUBJECT</label>
                            <input  className='textInput sizeTextInput'
                                    type ='text'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.handleChange} placeholder="Web design" required/>    
                        </div>
                        <div className='marginDiv flex'>
                            <label className='flex sizeTextContact'>MESSAGE</label>
                            <textarea   className='textInput sizeTextInput'
                                        name='message'
                                        value={this.state.message}
                                        onChange={this.handleChange} placeholder="Hello there" required></textarea>         
                        </div>
                        <div className="contentButton flex">
                            <input className='submit' type='submit' value='Submit'/>
                        </div>
                    </form>
                    {
                        this.state.showSpinner ? this.showLoading() : ''
                    }
                    {
                        this.state.showModal ? <Modal clickModal={ this.closeModal}/> : ''
                    }    
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;