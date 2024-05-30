import React from "react";
import { Link } from "react-router-dom";

import Exception404 from "./Exception/exception404";

export default function Error404() {
  const actions = (
    <div>
      <Link
        to="/"
        className="px-5 inline py-2 text-xxs font-medium ease-in-out font-poppins leading-5  rounded-3xl text-[#0C4E96] transition-all duration-400 border border-[#000000] "
      >
        Take me to home
      </Link>
    </div>
  );

  return (
    <section className="primary-gradient ">
      <p>Global header</p>
      <Exception404
        type="404"
        title="Oops !"
        desc="We couldn't find the page"
        actions={actions}
        desc2="Maybe you can find what you need here ?"
      />
    </section>
  );
}
