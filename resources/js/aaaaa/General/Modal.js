import React from 'react';
import '../styles/Modal.css';

class Modal extends React.Component {

    render() {
        return(
            <div onClick={this.props.clickModal} className="overlay flex justifyc alignc flex-col">
                <div onClick={this.props.clickModal} className="modalContent flex justifyc alignc flex-col">
                    <div className="container center">
                        <div onClick={this.props.clickModal} className="close icon"></div>
                        <p>Tu correo se ha enviado correctamente</p>
                        <br />
                        <br />
                        <p> En breve me pondre en contacto contigo </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;