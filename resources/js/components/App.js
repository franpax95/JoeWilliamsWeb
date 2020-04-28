import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

import Index from './Index'


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                {/* <Route exact path="/home" component={Index} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/exposition/:expoId" component={Exposition} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} /> */}
            </Switch>
        </BrowserRouter>
    );
}
export default App;

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('app')
    );
}