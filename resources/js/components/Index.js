import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Index.css';
import Header from './Header';
import Footer from './Footer';



class Index extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header 
                    left="A creative design"
                    right="By Joe Williams"
                />
                
                <div className="img flex justifyc alignc">
                    {/* <img src={ball} alt="" className="" /> */}
                </div>
                
                <div className="index flex flex-col justifyc">
                    <div className="link flex alignc">
                        <Link to="/gallery" className="">Gallery</Link>
                    </div>
                    <div className="link flex alignc">
                        <Link to="/about" className="">About</Link>
                    </div>
                    <div className="link flex alignc">
                        <Link to="/contact" className="">Contact</Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;