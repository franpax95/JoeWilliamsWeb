import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as expositionActions from '../actions/expositionActions';
import Loading from './General/Loading';
import Fatal from './General/Fatal';

import './styles/Gallery.css';

class Gallery extends React.Component {

    async componentDidMount() {
        if(!this.props.expositions.length) {
            await this.props.getAllExposition()
        }
    }

    renderGallery(){
        return(
            <div className="reference">
            {this.props.expositions.map(elem => {
                var link = "/exposition/" + elem.id;

                return(
                    <Link to={link} className="gallery-img" key={elem.id}>
                        <img 
                            src={elem.img.cover}
                            alt={elem.title}
                            className={`img-${elem.id}`} />
                    </Link>
                );
            })}
            </div>
        );
    }

    showContent() {
        if(this.props.loading) {
            return <Loading />
        }

        if(this.props.error) {
            console.log('ENTRO EN FATAL')
            return <Fatal mensaje={this.props.error}/>
        }

        return this.renderGallery();
    }

    render(){
        return(
            <React.Fragment>
                <div className="gallery body flex justifyc alignc">
                    {this.showContent()}
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({expositionReducer}) => expositionReducer;
export default connect(mapStateToProps,expositionActions)(Gallery);