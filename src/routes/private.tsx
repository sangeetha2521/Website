import Home from "pages/Home";
import { RouteProperties } from "./interfaces";

const routes: RouteProperties[] = [
  {
    component: Home,
    exact: true,
    params: {
      name: "Profile Settings",
    },
    path: "/users/profile",
  },
];

export default routes;
