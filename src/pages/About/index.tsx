import React from "react";
import left from "common/components/Icons/Rectangle 187.svg";
import illus from "common/components/Icons/illus 1.svg";
import group from "common/components/Icons/dotlines.svg";
import Team from "./team";
import Office from "./office";

export default function About() {
  return (
    <>
      <div className="flex flex-col xs:min-h-screen space-x-5 lg:mt-10">
        <div className="flex flex-col justify-center items-center xs:text-sm text-header">
          <h2 className="text-header-color  text-center xs:mt-10 ml-5 mr-5">
            About <span className="text-secondary-color font-light">Cloudside</span>
          </h2>
        </div>
        <div className="relative mt-5  md:mb-[50%] lg:mb-2">
          {/* <img className="absolute inset-0 object-cover xs:hidden ml-[5%] " src={left} alt="Placeholder Image" /> */}
          <div className="md:absolute inset-0 flex md:ml-[10%] flex-col xs:justify-center xs:items-center leading-md text-heading-color space-y-8  md:w-[50%] xs:w-[100%] xs:p-4 xs:text-justify md:m-10  z-10">
            <h2 className=" xs:text-sm md:text-subHeader md:mt-6">Our story!</h2>
            <h2 className=" text-paragraph-color text-[18px]">That sums up our team! </h2>
            <h2 className="inset-0   text-paragraph-color xs:text-xxs text-paragraph w-[95%] xs:w-full ">
              With decades of collective industry experience, we thrive on solving complex problems on cloud for our
              customers.Over the years, our core team has accumulated the experience of helping hundreds of customers
              migrate to AWS, GCP, and Azure. We have seen environments ranging from a handful of VMs to complex
              landscapes with thousands of VMs, hundreds of microservices, petabyte scale data processing, and
              innovative bespoke solutions using ML&AI.
            </h2>
            <h2 className="text-paragraph-color xs:text-xxs  text-[16px]">
              {" "}
              We are a bunch of talented and passionate engineers that get excited at solving Cloud and Data problems.
              If you are solving for anything in Cloud, Data, and App. Engage us. Lets solve it together!
            </h2>
            <button className="bg-secondary-color p-4 rounded-3xl lg:w-[40%] xs:text-xs xs:p-2 text-2xl xs:w-[80%] text-white">Get In Touch</button>
          </div>
          <img className=" ml-auto hidden  w-[12%]  " src={group} alt="Group2" />
          <img className="ml-auto mt-20 w-[40%] xs:hidden" src={illus} alt="Placeholder Image" />
        </div>
      </div>
      <div className="xs:flex xs:flex-col  ">
        <Team /> <Office />
      </div>
    </>
  );
}
