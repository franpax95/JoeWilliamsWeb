import React from 'react';
//import { Link } from 'react-router-dom';

import './styles/About.css';

class About extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            timer: 0
        }
    }

    handleClick(){
        window.scrollBy(0, window.innerHeight);
    }

    render(){
        return(
            <React.Fragment>
                <div className="about" id="about">
                    
                    <div className="section">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line">Hello there</div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="flex flex-row justifyc alignc">
                            <div className="line-90">My name is Joe Williams.</div>
                            <button onClick={this.handleClick} className="scroll-btn"><i class="fa fa-arrow-down"></i></button>
                        </div>
                        
                    </div>
                    <div className="section">
                        <div className="line">Im am a creative designer and</div>
                        <div className="line">maker of interesting things.</div>
                        <div className="line"></div>
                        <div className="line">I have created this space as a</div>
                        <div className="line">platform to showcase a range</div>
                        <div className="flex flex-row justifyc alignc">
                            <div className="line-90">of my work and collaborations.</div>
                            <button onClick={this.handleClick} className="scroll-btn"><i class="fa fa-arrow-down"></i></button>
                        </div>
                            
                    </div>
                    <div className="section">
                        <div className="line">If you have any questions or</div>
                        <div className="line">would like me to work with</div>
                        <div className="line">you on your next project</div>
                        <div className="line">please dont hesitate to</div>
                        <div className="line underline">Say hello!</div>
                        <div className="line"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;