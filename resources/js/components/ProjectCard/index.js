import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.css';

const ProjectCard = ({ to='/', height = 'auto', src='', alt='Project' }) => {
    return (
        <Link to={to} className="ProjectCard" style={{ height: height }}>
            <img src={src} alt={alt} />
        </Link>
    );
}

export default ProjectCard;