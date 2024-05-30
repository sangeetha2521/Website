import React, { useEffect, useState } from "react";
import logo from "common/components/Icons/logo.svg";
import { headerProps } from "../header/constants";
import linkdin from "common/components/Icons/pngegg (7) 1.svg";
import youtube from "common/components/Icons/pngegg (9) 1.svg";
import twitter from "common/components/Icons/pngegg (8) 1.svg";
import { Link } from "react-router-dom";

export const Footer: React.FC<any> = ({activeLink,onLinkClick}) => {
  const [headerName, setHeaderName] = useState("");
  const [openMenu, setOpenMenu] = useState(localStorage.getItem("openMenu") === "true" ? true : false);

  useEffect(() => {
    localStorage.setItem("openMenu", openMenu.toString());
  }, [openMenu]);

  const toggleMenu = (name) => {
    onLinkClick(name);
    setOpenMenu(!openMenu);
  };
  return (
    <div className=" lg:mt-0 bottom-0 md:w-full left-0  xs:w-[100%] text-footer-text-color">
      <div className="font-gilroy bg-card-color  p-6 mt-20 relative">
        <img className="absolute p-4 lg:ml-20 z-0 mt-2 xs:ml-[10%] top-4 lg:top-0" src={logo} alt="Logo" />

        <div className="flex items-center lg:justify-between  xs:mt-10    xs:justify-center   text-paragraph mt-4 lg:mt-16 lg:mr-20">
          <div className="  xs:flex-col xs:space-y-4 xs:flex lg:ml-5 lg:w-[60%]">
            {headerProps.map((prop) => (
              <Link
              to={`/${prop.name}`}
                className={` ${
                  activeLink === prop.name ? "text-secondary-color" : "text-foooter-text-color"
                } xs:ml-[70%] xs:mt-100 lg:ml-20 font-gilroy cursor-pointer`}
                key={prop.name}
                onClick={() => toggleMenu(prop.name)}
              >
                {prop.label}
              </Link>
            ))}
          </div>
          <div className="flex xs:mt-[90%] xs:-ml-[26%] space-x-4">
            <img src={linkdin} />
            <img src={twitter} />
            <img src={youtube} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:ml-24 border-t-2 lg:mr-20 border-card-text-color mt-4 lg:mt-4 lg:mb-10">
          <h2 className="ml-10 lg:ml-0 mt-6 lg:mt-4 text-header-color">Copyright © <span className="text-secondary-color underline ">thecloudside.com </span>2024</h2>
          <div className="flex xs:justify-center xs:items-center  space-x-4">
            <h2 className="ml-4 lg:ml-0 mt-4 lg:mt-0 lg:self-end">Terms</h2>
            <h2 className="ml-4 lg:ml-0 mt-4 lg:mt-0 lg:self-end">Privacy</h2>
            <h2 className="ml-4 lg:ml-0 mt-4 lg:mt-0 lg:self-end">Cookies</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
