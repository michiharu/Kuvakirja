import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../settings/routes';
import LoginRouter from './login-router';

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes
          .filter(route => !route.auth)
          .map((route, key) => <Route key={key} {...route} />)}
        <LoginRouter />
      </Switch>
    </BrowserRouter>
  );
}

export default PageRouter;
