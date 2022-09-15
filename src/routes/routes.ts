import Home from "../pages/Home";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Settings",
    component: Settings,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    exact: false,
  },
];

export default routes;
