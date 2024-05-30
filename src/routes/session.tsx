import Home from "pages/Home";
import { RouteProperties } from "./interfaces";

const routes: RouteProperties[] = [
  {
    component: Home,
    exact: true,
    path: "/register",
  },
  {
    component: Home,
    exact: true,
    path: "/login",
  },
  {
    component: Home,
    exact: true,
    path: "/forgot-password",
  },
  {
    component: Home,
    exact: true,
    path: "/reset-password",
  },
];

export default routes;
