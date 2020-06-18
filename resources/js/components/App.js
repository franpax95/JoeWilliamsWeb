import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';

import Index from '../pages/Index';

import './App.css';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/home" component={Index} />
            {/* <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/exposition/:id" component={Exposition} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} /> */}
        </Switch>
    </BrowserRouter>
);

export default App;