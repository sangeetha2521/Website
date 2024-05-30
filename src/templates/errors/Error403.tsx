import React from "react";
import { Link } from "react-router-dom";
import Exception403 from "./Exception/exception403";

export default function Error403() {
  const actions = (
    <div>
      <Link
        to="/"
        className="px-6 py-3 z-[999] relative w-auto text-[12px]  bg-[#0C4E96] button-gradient text-white cursor-pointer hover:transition-all duration-400  shadow-md font-raleway  text-[12px] font-semibold rounded-md "
      >
        Login to get started
      </Link>
    </div>
  );

  return (
    <section className="  primary-gradient">
      <p>Headder</p>
      <Exception403
        type="403"
        title="Login again to continue the session "
        desc="This area is private, you don't have access to this page"
        actions={actions}
      />
    </section>
  );
}
