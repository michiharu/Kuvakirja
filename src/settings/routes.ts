import Route from "../types/route";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";
import WatchIcon from "@material-ui/icons/TurnedIn";

import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";

import * as env from '../settings/env.json';

export const loginRoute: Route = {
  layout: '',
  path: `${env.useGithubIo ? env.repositoryPath : ""}/login`,
  exact: true,
  label: 'Login',
  component: Login
};

export const dashboardRoute: Route = {
  layout: '',
  path: `${env.useGithubIo ? env.repositoryPath : ""}/top`,
  exact: false,
  label: 'Top',
  Icon: DashboardIcon,
  component: Dashboard,
}

const routes: Route[] = [
  dashboardRoute,
  {
    layout: '',
    path: `${env.useGithubIo ? env.repositoryPath : ""}/search`,
    exact: false,
    label: 'Search',
    Icon: SearchIcon,
  },
  {
    layout: '',
    path: `${env.useGithubIo ? env.repositoryPath : ""}/watch`,
    exact: false,
    label: 'Watch',
    Icon: WatchIcon
  },
];

export default routes;