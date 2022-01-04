import React from 'react';
import Login from './Login';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default function Rout() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/app' exact component={App}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}