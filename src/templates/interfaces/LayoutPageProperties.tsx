import React from "react";
import { RouteProps } from "react-router-dom";

import PageProperties from "../../routes/PageProperties";

interface LayoutPageProperties {
  Component: React.FC<PageProperties>;
  route: RouteProps;
  type: any;
  params?: any;
}

export default LayoutPageProperties;
