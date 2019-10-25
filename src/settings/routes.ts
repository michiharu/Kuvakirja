import Route from "../types/route";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";
import WatchIcon from "@material-ui/icons/TurnedIn";

import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";

export const loginRoute: Route = {
  layout: '',
  path: '/login',
  exact: true,
  label: 'Login',
  component: Login
};

export const dashboardRoute: Route = {
  layout: '',
  path: '/top',
  exact: false,
  label: 'Top',
  Icon: DashboardIcon,
  component: Dashboard,
}

const routes: Route[] = [
  dashboardRoute,
  {
    layout: '',
    path: '/search',
    exact: false,
    label: 'Search',
    Icon: SearchIcon,
  },
  {
    layout: '',
    path: '/watch',
    exact: false,
    label: 'Watch',
    Icon: WatchIcon
  },
];

export default routes;