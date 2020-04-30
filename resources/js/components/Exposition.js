import React, { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import * as expositionActions from '../actions/expositionActions';

import './styles/Exposition.css';

const Exposition = (props) => {
    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;

            //Si exposition = {}
            if(!Object.entries(props.exposition).length) 
                await props.getExposition(id);
            
            console.log(props.exposition);
        }

        fetchData();
    }, []);

    return(
        <div>Exposition</div>
    )
}

const mapStateToProps = ({expositionReducer}) => expositionReducer;
export default connect(mapStateToProps, expositionActions)(Exposition);

// class Exposition extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             id: props.match.params.expoId,
//             elems: data.elems,
//             elemsExpo: dataImg.elems
//         }
//     }

//     renderExpo(){
//         const element = this.state.elems.filter(filtro => filtro.id == this.state.id);
//         const elementExpo = this.state.elemsExpo.filter( filter => filter.id == element[0].id)

//         return(
//             <React.Fragment>
//                 {element.map(elem => {
//                     return(
//                         <div className={`gallery-expo ${elementExpo[0].class}`} >
//                             <div className="title"><h1>{elem.title}</h1></div>
//                             <div className="description"><hr />{elem.description}</div>
//                             <div className="type">{elem.type}</div>
//                             <div className="details">{elem.details}</div>
//                             <div className="imagen">
//                                 <img
//                                     src={"/storage" + elementExpo[0].img}
//                                     alt={elementExpo[0].title} />
//                             </div>
//                         </div>
//                     )
//                 }
//             )}
//             </React.Fragment>
//         )
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <Header 
//                     left="Home"
//                     right="Gallery"
//                 />
//                 <div className="exposition flex justifyc alignc">
//                     {this.renderExpo()}
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

