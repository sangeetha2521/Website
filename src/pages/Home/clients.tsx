import React from "react";
import { location } from "./constants";
import Map from "./map";
import LeftArrow_client from "../../common/components/Icons/leftArrow_client";
import RightArrow_client from "common/components/Icons/rightArrow_client";



export default function Clients() {
  return (
    <>
      <div className="2xl:mt-44 md:mt-20 xs:mt-20 bg-primary-color rounded-t-3xl  ">
        <div className="flex md:space-x-5 lg:m-4  ">
          <LeftArrow_client />
          <span className="flex  xs:text-subHeader text-white md:text-xl xs:ml-[25%] lg:text-header lg:mt-10 drop-shadow-sm ">
            Our
            <h2 className="text-secondary-color ml-5 ">Clients</h2>
          </span>
          <RightArrow_client />
        </div>
        <div className="flex xs:mt-10  space-x-2 2xl:mt-36">
          <div className="bg-primary-color  w-[80%] rounded-e-2xl 2xl:-ml-20"> </div>
        </div>
        <Map locations={location} />
        <div className="text-transparent lg:mt-10">h</div>
      </div>
    </>
  );
}
