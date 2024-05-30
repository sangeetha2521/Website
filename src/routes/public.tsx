import Home from "pages/Home";
import { RouteProperties } from "./interfaces";

const routes: RouteProperties[] = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
];

export default routes;
