import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.css';

const ProjectCard = ({ to='/', height = 'auto', src='', alt='Project' }) => {
    const _class = alt.replace(/\s/g, '');
    return (
        <Link to={to} className={`ProjectCard ${_class}`} style={{ height: height }}>
            <img src={src} alt={alt} />
        </Link>
    );
}

export default ProjectCard;