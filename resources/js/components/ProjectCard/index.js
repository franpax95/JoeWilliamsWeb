import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const loadImage = url => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener('load', e => resolve(img));
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load image's URL: ${url}`))
        });
        img.src = url;
    })
}


const ProjectCard = ({ to='/', height = 'auto', src='', alt='Project' }) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            await loadImage(src).then(img => {}).catch(error => {});
            setDisplay(true);
        }

        fetchImage();
    }, []);

    const spring = useSpring({ opacity: display ? 1 : 0 });

    const _class = alt.replace(/\s/g, '');
    return (
        <animated.div style={{ ...spring }}>
            <Link to={to} className={`ProjectCard ${_class}`} style={{ height: height }}>
                {display && <img src={src} alt={alt} />}
            </Link>
        </animated.div>
    );
}

export default ProjectCard;