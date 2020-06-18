import React from 'react';
import './About.css';

const SpaceBetween = ({ height = '100px'}) => (
    <div style={{ height: height, minHeight: height }}></div>
);

const About = () => (
    <div className="About">
        <SpaceBetween height="40vh" />

        <span>A little about me</span>

        <SpaceBetween height="20vh" />

        <span>My name is Joe Williams.</span>
        <span>I am a creative designer and</span>
        <span>maker of interesting things.</span>

        <SpaceBetween height="20vh" />

        <span>I have created this space as a</span>
        <span>platform to showcase a range</span>
        <span>of my work and collaborations.</span>

        <SpaceBetween height="20vh" />

        <span>If you have any questions or</span>
        <span>would like to work together</span>
        <span>on your next project please</span>
        <span>feel free to <span className="hello">say hello!</span></span>
    </div>
);

export default About;