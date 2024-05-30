import React, { useEffect, useState } from "react";
import logo from "common/components/Icons/logo.svg";
import { headerProps } from "./constants";
import { Link } from "react-router-dom";
import Circle from "common/components/Icons/Circles.svg";

interface HeaderProps {
  activeLink: string;
  onLinkClick: (link: string) => void;
}
export const Header: React.FC<HeaderProps> = ({ activeLink, onLinkClick }) => {
  const [openMenu, setOpenMenu] = useState(localStorage.getItem("openMenu") === "true" ? true : false);
  const toggleMenu = (name) => {
    onLinkClick(name);
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    localStorage.setItem("openMenu", openMenu.toString());
  }, [openMenu]);

  return (
    <>
      {(activeLink == "home" || !activeLink) && (
        <img
          className="lg:absolute md:h-[50%] lg:h-[80%] xs:h-[40%] lg:z-0 md:absolute md:z-0 sm:absolute xs:absolute"
          src={Circle}
          alt="Circle"
        />
      )}
      <div className="flex p-5 border-b-2 w-full xs:w-[100%] text-[16px] text-header-color border-gray-200 relative">
        <img className="ml-[10%] lg:ml-[4%] xs:w-[40%]" src={logo} alt="Logo" />
        <div className="hidden lg:flex lg:ml-[28%] lg:w-[40%] space-x-4 lg:space-x-[10%] items-center">
          {headerProps.map((prop) => (
            <Link
              to={`/${prop.name}`}
              onClick={() => toggleMenu(prop.name)}
              className={`text-header-color ${activeLink === prop.name ? "text-secondary-color" : ""} cursor-pointer`}
              key={prop.name}
            >
              {prop.label}
            </Link>
          ))}
        </div>
        <button className="hidden lg:flex border-2 w-[10%] lg:-ml-[5%]  text-paragraph  border-header-color rounded-xl text-header-color py-1 px-4 lg:px-6">
          Contact us
        </button>
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="block text-header-color cursor-pointer">
            {openMenu ? "Close" : "Menu"}
          </button>
          {openMenu && (
            <div className="absolute top-full w-full xs:rounded-3xl left-0 right-0 bg-white  z-10 border-b-2 border-gray-200">
              {headerProps.map((prop) => (
                <Link
                  to={`/${prop.name}`}
                  className={`block py-2 px-4 text-center ${
                    activeLink === prop.name ? "text-secondary-color" : "text-header-color"
                  } `}
                  key={prop.name}
                  onClick={() => toggleMenu(prop.name)}
                >
                  {prop.label}
                </Link>
              ))}
              <button
                className="block py-2 px-4 text-header-color text-center font-gilroy hover:bg-gray-100 w-full text-left"
                onClick={toggleMenu}
              >
                Contact us
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
