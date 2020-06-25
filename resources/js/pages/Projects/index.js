import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as expositionActions from '../../actions/expositionActions';

import ProjectCard from '../../components/ProjectCard';
import ProjectController from '../../components/Project';
import { Loading } from '../../components/Loading';
import { Fatal } from '../../components/Fatal';

import { AiOutlineArrowLeft } from "react-icons/ai";

import './Projects.css';

const Projects = (props) => {
    const ref = useRef(null);

    /** componentDidMount() */
    useEffect(() => {
        const fetchData = async () => {
            const { exposition, expositions, loading } = props;
            const { id } = props.match.params;

            /** fetch all expositions */
            if(!id && !expositions.length && !loading) 
                await props.getAllExposition();

            /** fetch single exposition (if it isn't current exposition) */
            if(id && (!Object.values(exposition).length || id !== exposition.id) && !loading)
                await props.getExposition(id);
        }
        
        fetchData();
    }, [props.location]);

    useLayoutEffect(() => {
        ref.current.classList.remove("in");
        ref.current.classList.add("out");

        setTimeout(() => {
            ref.current.classList.remove("out");
            ref.current.classList.add("in");
        }, 2000);
    }, [props.location]);

    const onWheel = (e) => {
        const largeContainerScrollPosition = ref.current.scrollLeft;
        ref.current.scrollTo({
            top: 0,
            left: largeContainerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    }

    const renderProjects = () => {
        const { expositions, loading, error } = props;

        if(loading) return <Loading />;
        if(error)   return <Fatal message={error} />;

        return expositions.map(exposition => (
            <ProjectCard 
                key={exposition.id}
                to={`/projects/${exposition.id}`}
                height="50vh" 
                src={exposition.img.cover} 
                alt={exposition.title}
            />
        ));
    }
    


    const renderProject = () => {
        const { exposition, loading, error } = props;

        if(loading) return <Loading />;
        if(error)   return <Fatal message={error} />;
        return (<>
            <Link className="back-btn" to="/projects"><AiOutlineArrowLeft /></Link>
            <ProjectController project={exposition} />
        </>);
    }

    return (
        <div className="Projects out" onWheel={onWheel} ref={ref}>
            {(props.match.params.id) ? renderProject() : renderProjects()}
        </div>
    );
}

const mapStateToProps = ({ expositionReducer }) => expositionReducer;
export default connect(mapStateToProps, expositionActions)(Projects);