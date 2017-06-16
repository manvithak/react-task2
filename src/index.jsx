// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");
//import {  Route, hashHistory } from 'react-router'
import {HashRouter,Route} from 'react-router-dom';
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import GetSources from './task2new.jsx';

ReactDOM.render((
    <HashRouter>
       <Route path = "/" component = {GetSources}>
       </Route>
     </HashRouter>
    ), document.getElementById('react-root'));
//ReactDOM.render(<GetSources/>, document.getElementById('react-root'));
