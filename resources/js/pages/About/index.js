import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInnerWidth from '../../hooks/useInnerWidth';
import { SpaceBetween } from '../../components/SpaceBetween';

import './About.css';

const About = () => {
    const width = useInnerWidth();
    const [spaceHeight, setSpaceHeight] = useState((width> 700) ? '20vh' : '10vh');
    useEffect(() => { setSpaceHeight((width > 700) ? '20vh' : '10vh'); }, [width]);

    return (
        <div className="About">
            <SpaceBetween height="40vh" />

            <span>A little about me</span>

            <SpaceBetween height={spaceHeight} />

            <span>My name is Joe Williams.</span>
            <span>I am a creative designer and</span>
            <span>maker of interesting things.</span>

            <SpaceBetween height={spaceHeight} />

            <span>I have created this space as a</span>
            <span>platform to showcase a range</span>
            <span>of my work and collaborations.</span>

            <SpaceBetween height={spaceHeight} />

            <span>If you have any questions or</span>
            <span>would like to work together</span>
            <span>on your next project please</span>
            <span>feel free to <Link to="/contact" className="hello">say hello!</Link></span>
        </div>
    );
}

export default About;