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

    const prevPage = () => {
        if((Object.keys(props.exposition.img).length > 2) && (props.currentPage === 1)){
            const lastPage = Object.keys(props.exposition.img).length - 1;
            props.changePage(lastPage);
        }else{
            props.changePage(props.currentPage - 1);
        }
    }

    const replaceNewLine = (text) => (
        text.split('/n').map((substr, i) => {
            if(substr === ""){
                return <React.Fragment key={i}><br/><br/></React.Fragment>
            }else{
                return <span key={i}>{substr}</span>;
            }
        })
    );

    const renderImageDivs = () => {
        if(Object.values(props.exposition.img)[props.currentPage]){
            let currentImages = Object.values(props.exposition.img)[props.currentPage];
            return currentImages.map((img, key) => (
                <div className={`img-${key}`} key={key}>
                    <img src={`/storage${img}`} />
                </div>
            ));
        }
        return;
    }

    const renderExposition = () => {
        if(props.loading) return <Loading />;
        if(props.error) return <Fatal mensaje={props.error} />

        if(Object.entries(props.exposition).length){
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
                    {renderImageDivs()}
                </div>
            )
        }
    }

    return(
        <React.Fragment>
            <div className="body Exposition">
                {renderExposition()}
            </div>
            <div className="page-box">
                <div className="prev" onClick={prevPage}></div>
                <div className="next" onClick={nextPage}></div>
            </div>
        </React.Fragment>
            
    )
}

const mapStateToProps = ({expositionReducer}) => expositionReducer;
export default connect(mapStateToProps, expositionActions)(Exposition);