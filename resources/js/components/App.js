import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

import Navbar from './Navbar';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import './App.css';

const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1,},
        // update: { opacity: 1 },
        leave: { opacity: 0, },
        // config: { duration: 500 }
    });

    return (<>
        <Navbar />
        {transitions.map(({item, props, key}) => (
            <animated.div key={key} className="App" style={props}>
                <Switch location={item}>
                    <Route exact path="/" component={Home} />
                    <Route exact path={["/projects", "/projects/:id"]} component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </animated.div>
        ))}
    </>);
}



export default App;