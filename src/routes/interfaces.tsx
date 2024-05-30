import React from "react";
import PageProperties from "./PageProperties";
import { RouteTypeEnum } from "./routeTypes";

export interface RouteProperties {
  component: React.FC<PageProperties>;
  exact?: boolean;
  params?: {
    [key: string]: any;
    type?: string;
  };
  path: string;
  template?: React.FC<any>;
}

export interface RouteTemplateProperties {
  routes: RouteProperties[];
  template: React.FC<any>;
  type: RouteTypeEnum;
}
