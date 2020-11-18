import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Admin from './Admin';
import Login from './pages/admin/login'
import App from './App';
import { mainRoutes } from './routers/index';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/pages" render={routerProps=><App {...routerProps} />} />
      <Route path="/admin" render={routerProps=><Admin {...routerProps} />} />
      <Route path="/login" render={routerProps=><Login {...routerProps} />} />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
