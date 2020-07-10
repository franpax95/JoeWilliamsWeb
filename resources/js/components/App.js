import React, {useContext} from 'react';
import {Route, Switch, useLocation } from 'react-router-dom';
import {useTransition, animated} from 'react-spring'

import Navbar from './Navbar';

import Index from '../pages/Index';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import './App.css';

const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, },
        enter: { opacity: 1,},
        leave: { opacity: 0, }
    });

    return (
        <>
            <Navbar />
            {
                transitions.map(({item, props, key}) => (
                    <animated.div key={key} style={props}>
                        <Switch location={item}>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/home" component={Index} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/projects/:id" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </animated.div>
                ))
            }
        </>
    )
}



export default App;