import React from 'react';
import './Form.css';
import {Input, TextArea} from '../Input';

const Form = ({ onSubmit }) => {
    return(
        <form className='Form-Contact'>
            <div className='Input-Container alignc flex'>
                <label className=''>NAME</label>
                <Input name='name'  placeholder="Joe Williams"/>
            </div>
            <div className='Input-Container alignc flex'>
                <label className=''>E-MAIL</label>
                <Input name='email' type='email' placeholder='jts.design@gmail.com'/>
            </div>
            <div className='Input-Container alignc flex'>
                <label className=''>SUBJECT</label>
                <Input name='subject' placeholder='Web Design'/>   
            </div>
            <div className='Input-Container alignc flex'>
                <label className=''>MESSAGE</label>
                <TextArea name='message' placeholder='Hello There'/>
            </div>
            <input className='submit' type='submit' value='Submit'/>
        {/* {
            this.state.showSpinner ? this.showLoading() : ''
        }
        {
            this.state.showModal ? <Modal clickModal={ this.closeModal}/> : ''
        } */}
        </form>         
    )
}

export default Form;