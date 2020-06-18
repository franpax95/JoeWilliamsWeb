import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';

import Index from '../pages/Index';
import About from '../pages/About';
import Projects from '../pages/Projects';

import './App.css';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/home" component={Index} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={Projects} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
);

export default App;