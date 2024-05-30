import React from "react";
import LayoutPageProperties from "../interfaces/LayoutPageProperties";
import PrivateLayout from "./Private";
import PublicLayout from "./Public";

const GlobalLayout = ({ Component, params, route, type = "public" }: LayoutPageProperties) => (
  <>
    {type === "private" ? (
      <PrivateLayout params={params}>
        <Component route={route} />
      </PrivateLayout>
    ) : (
      <PublicLayout>
        <Component route={route} />
      </PublicLayout>
    )}
  </>
);

export default GlobalLayout;
