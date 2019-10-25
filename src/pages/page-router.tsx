import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../settings/routes';

import Dashboard from './dashboard/dashboard';

const PageRouter = () => {
  return (
    <Switch>
      {routes.map((route, key) => {
        const path = route.layout + route.path
        const component = Dashboard;
        return <Route key={key} exact={route.exact} path={path} component={component} />;
      })}
    </Switch>
  );
}

export default PageRouter;
