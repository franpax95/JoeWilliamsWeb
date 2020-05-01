import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Index.css';


const Index = () => (
    <div className="background-flame Index flex flex-col justifyc alignc">
        <span>A creative space</span>
        <span>by Joe Williams</span>
        <Link to="exposition/1"> Exposición 1</Link>
        <Link to="exposition/2"> Exposición 2</Link>
        <Link to="exposition/3"> Exposición 3</Link>
        <Link to="exposition/7"> Exposición 7</Link>
        <Link to="exposition/8"> Exposición 8</Link>
        <Link to="exposition/9"> Exposición 9</Link>
        <Link to="exposition/10"> Exposición 10</Link>
        <Link to="exposition/11"> Exposición 11</Link>
    </div>
);

export default Index;