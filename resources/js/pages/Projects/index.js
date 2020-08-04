import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as expositionActions from '../../actions/expositionActions';

import { useTransition, animated } from 'react-spring';

import ProjectCard from '../../components/ProjectCard';
import ProjectController from '../../components/Project';
import { Loading } from '../../components/Loading';
import { Fatal } from '../../components/Fatal';

import { AiOutlineArrowLeft } from "react-icons/ai";

import './Projects.css';

const Projects = (props) => {
    const ref = useRef();
    const { id } = props.match.params;

    const transitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        update: { opacity: 1 },
        leave: { opacity: 0 },
        unique: true,
        reset: true
    });

    /** componentDidMount() */
    useEffect(() => {
        const fetchData = async () => {
            const { exposition, expositions, loading } = props;

            /** fetch all expositions */
            if(!id && !expositions.length && !loading) 
                await props.getAllExposition();

            /** fetch single exposition (if it isn't current exposition) */
            if(id && (!Object.values(exposition).length || id !== exposition.id) && !loading)
                await props.getExposition(id);
        }
        
        fetchData();
    }, [id]);

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

    

    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} className="Projects" onWheel={onWheel} ref={ref}>
            {(id) ? renderProject() : renderProjects()}
        </animated.div>
    ))
}

const mapStateToProps = ({ expositionReducer }) => expositionReducer;
export default connect(mapStateToProps, expositionActions)(Projects);