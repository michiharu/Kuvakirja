import Route from "../types/route";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";
import WatchIcon from "@material-ui/icons/TurnedIn";

import Dashboard from "../pages/top/top";
import Login from "../pages/login/login";

import * as env from '../settings/env.json';

export const loginRoute: Route = {
  auth: false,
  path: `${env.useGithubIo ? env.repositoryPath : ""}/login`,
  exact: true,
  label: 'Login',
  component: Login
};

export const dashboardRoute: Route = {
  auth: false,
  path: `${env.useGithubIo ? env.repositoryPath : ""}/`,
  exact: false,
  label: 'Top',
  Icon: DashboardIcon,
  component: Dashboard,
}

const routes: Route[] = [
  dashboardRoute,
  {
    auth: false,
    path: `${env.useGithubIo ? env.repositoryPath : ""}/search`,
    exact: false,
    label: 'Search',
    Icon: SearchIcon,
  },
  {
    auth: true,
    path: `${env.useGithubIo ? env.repositoryPath : ""}/watch`,
    exact: false,
    label: 'Watch',
    Icon: WatchIcon
  },
];

export default routes;