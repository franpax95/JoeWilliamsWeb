import React from 'react';
import './Form.css';
import {Input, TextArea} from '../Input';
import {Loading} from '../Loading';
import {Button} from '../Buttons';

const Form = ({ onSubmit,onChange,showSpinner, screenWidth }) => {
    return(
        <form className='Form-Contact' onSubmit={onSubmit}>
             {
                showSpinner ? <Loading />   : ''
             } 
            <div className='Input-Container alignc flex'>
                {
                    screenWidth > 600 ?  <label className=''>NAME</label> : ''
                }     
                <Input name='name'  placeholder="Joe Williams" onChange={onChange}/>
            </div>
            <div className='Input-Container alignc flex'>
                {
                    screenWidth > 600 ?  <label className=''>E-MAIL</label> : ''
                }  
                <Input name='email' type='email' placeholder='jts.design@gmail.com' onChange={onChange}/>
            </div>
            <div className='Input-Container alignc flex' id='container-input'>
                {
                    screenWidth > 600 ?  <label className=''>SUBJECT</label> : ''
                } 
                <Input name='subject' placeholder='Web Design' onChange={onChange}/>   
            </div>
            <div className='Input-Container Input-Container-TextArea alignc flex' id='container-input'>
                {
                    screenWidth > 600 ?  <label className=''>MESSAGE</label> : ''
                } 
                <TextArea name='message' placeholder='Hello There' onChange={onChange}/>
            </div>
            <Button text='Submit' type='submit' clase='submit'/>
        </form>         
    )
}

export default Form;