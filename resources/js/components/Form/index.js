import React from 'react';
import './Form.css';
import {Input, TextArea} from '../Input';

const Form = () => {
    return(

            <form className='Form-Contact'>
                <div className='Input-Container alignc flex'>
                    <label className=''>NAME</label>
                    <label className=''>NAME</label>
                    <Input name='name' value='name' placeholder='Joe Williams'/>
                </div>
                <div className='Input-Container alignc flex'>
                    <label className=''>E-MAIL</label>
                    <Input name='email' type='email' value='email' placeholder='jts.design@gmail.com'/>
                </div>
                <div className='Input-Container alignc flex'>
                    <label className=''>SUBJECT</label>
                    <Input name='subject' value='subject' placeholder='Web Design'/>   
                </div>
                <div className='Input-Container alignc flex'>
                    <label className=''>MESSAGE</label>
                    <textarea  
                        className=''
                        name='message'
                        value=''
                        placeholder="Hello there" required>
                    </textarea>         
                </div>
                <div className="flex">
                    <input className='' type='submit' value='Submit'/>
                </div>
           
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