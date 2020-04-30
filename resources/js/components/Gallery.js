import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Gallery.css';
import data from '../gallery.json';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            elems: data.elems
        }
    }

    renderGallery(){
        return(
            <div className="reference">
            {this.state.elems.map(elem => {
                var top = "top" +  elem.top;
                var right = "right" + elem.right;
                var z = "index" + elem.z;
                var width = "width" + elem.width;
                var imgClass = top + " " + right + " " + z + " " + width;

                var link = "/exposition/" + elem.id;

                return(
                    <Link to={link} className="gallery-img" key={elem.id}>
                        <img 
                            src={"storage" + elem.img}
                            alt={elem.title}
                            className={imgClass} />
                    </Link>
                );
            })}
            </div>
        );
    }

    render(){
        return(
            <React.Fragment>
                {/* <Header 
                    left="Home"
                    right="Gallery"
                /> */}
                <div className="gallery body flex justifyc alignc">
                    {this.renderGallery()}
                </div>
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

export default Gallery;