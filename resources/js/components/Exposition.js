import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as expositionActions from '../actions/expositionActions';

import Loading from './General/Loading';
import Fatal from './General/Fatal';

import './styles/Exposition.css';

const Exposition = (props) => {
    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;

            //Si exposition = {}
            if((!Object.entries(props.exposition).length) || (props.exposition.id !== Number(id)))
                await props.getExposition(id);
            
            //Reinicializamos el currentPage
            props.changePage(1);
        }

        fetchData();
    }, []);

    const nextPage = () => {
        if(Object.keys(props.exposition.img)[props.currentPage+1]){
            props.changePage(props.currentPage + 1);
        }else{
            props.changePage(1);
        }
    }

    const replaceNewLine = (text) => (
        text.split('\r\n\r\n').map((substr, i) => {
            if(substr === ""){
                return <React.Fragment key={i}><br/><br/></React.Fragment>
            }else{
                return <span key={i}>{substr}</span>;
            }
        })
    );

    const renderExposition = () => {
        if(props.loading) return <Loading />;
        if(props.error) return <Fatal mensaje={props.error} />

        if(Object.entries(props.exposition).length){
            const img_url = `/storage${Object.values(props.exposition.img)[props.currentPage]}`;
            const div_class = `class-${props.exposition.id} page-${props.currentPage}`;
            
            return(
                <div className={div_class}>
                    <div className="title">
                        {props.exposition.title}
                    </div>
                    <div className="description">
                        <hr />
                        {replaceNewLine(props.exposition.description)}
                    </div>
                    <div className="type">
                        <hr />
                        {props.exposition.type}
                    </div>
                    <div className="details">
                        <hr />
                        {props.exposition.details}
                    </div>
                    <div className="img">
                        <img src={img_url} />
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="body Exposition" onClick={nextPage}>
            {renderExposition()}
        </div>
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

