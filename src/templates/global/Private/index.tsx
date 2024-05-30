import React from "react";
import Layout from "common/container/Layout";

const PrivateLayout: React.FC<any> = ({ children, params }) => {
  return <Layout params={params}>{children}</Layout>;
};

export default PrivateLayout;
