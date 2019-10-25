import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/layout';
import { useAuth } from '../redux/authModule';

import { loginRoute, dashboardRoute } from '../settings/routes';

const LoginRouter = () => {
  const loginUrl = loginRoute.layout + loginRoute.path;
  const dashboardUrl = dashboardRoute.layout + dashboardRoute.path
  const { isLogin } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!isLogin && <Route exact path={loginUrl} component={loginRoute.component!} />}
        {!isLogin && <Redirect to={loginUrl} />}
        <Redirect exact path={loginUrl} to={dashboardUrl} />}
        <Route component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default LoginRouter;
