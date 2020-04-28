import React from 'react';

import './styles/Exposition.css';
import data from '../gallery.json';
import dataImg from '../galleryExpo.json';

import Header from '../components/Header';

class Exposition extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.expoId,
            elems: data.elems,
            elemsExpo: dataImg.elems
        }
    }

    renderExpo(){
        const element = this.state.elems.filter(filtro => filtro.id == this.state.id);
        const elementExpo = this.state.elemsExpo.filter( filter => filter.id == element[0].id)

        return(
            <React.Fragment>
                {element.map(elem => {
                    return(
                        <div className={`gallery-expo ${elementExpo[0].class}`} >
                            <div className="title"><h1>{elem.title}</h1></div>
                            <div className="description"><hr />{elem.description}</div>
                            <div className="type">{elem.type}</div>
                            <div className="details">{elem.details}</div>
                            <div className="imagen">
                                <img
                                    src={"/storage" + elementExpo[0].img}
                                    alt={elementExpo[0].title} />
                            </div>
                        </div>
                    )
                }
            )}
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
                <Header 
                    left="Home"
                    right="Gallery"
                />
                <div className="exposition flex justifyc alignc">
                    {this.renderExpo()}
                </div>
            </React.Fragment>
        )
    }
}

export default Exposition;