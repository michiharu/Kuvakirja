import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAuth } from '../redux/authModule';

import routes, { loginRoute, dashboardRoute } from '../settings/routes';

const LoginRouter = () => {
  const loginUrl = loginRoute.auth + loginRoute.path;
  const dashboardUrl = dashboardRoute.auth + dashboardRoute.path
  const { isLogin } = useAuth();

  return (
    <Switch>
      {!isLogin && <Route exact path={loginUrl} component={loginRoute.component!} />}
      {!isLogin && <Redirect to={loginUrl} />}
      <Redirect exact path={loginUrl} to={dashboardUrl} />}
      {routes.map((route, key) => <Route key={key} {...route} />)}
    </Switch>
  );
}

export default LoginRouter;
