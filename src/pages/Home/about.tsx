import React from "react";
import leftline from "common/components/Icons/leftline.svg";
import rightline from "common/components/Icons/rightline.svg";
import illus6 from "common/components/Icons/Illus 6.svg";


export default function About() {
  return (
    <>
      <div className="flex md:space-x-5 justify-center xs:mt-[10%] md:mt-[5%] md:mb-10">
        <img className="rotate-180  md:w-[50%] xs:hidden " src={rightline}></img>
        <span className="flex  xs:text-sm md:text-header text-header-color xs:ml-2 lg:text-header md:  ">
          About
          <h2 className="text-secondary-color ml-5 mr-5  ">Us</h2>
        </span>
        <img className="md:w-[15%] xs:w-[10%] rotate-180 xs:hidden" src={leftline}></img>
      </div>
      <div className="flex xs:flex-col 2xl:mt-36">
        <div className="md:bg-primary-color md:w-[40%] xs:hidden  h-32 my-auto  2xl:-ml-20">
          <img className="md:absolute md:w-[20%] lg:w-[25%] md:hidden  lg:block xl:-mt-[30%] lg:ml-20 lg:-mt-[10%] xs:hidden 2xl:-mt-[13%] 2xl:ml-44" src={illus6} />
        </div>
        <div className="  bg-card-color xs:mt-6 lg:w-[60%] xs:p-4 xs:mr-4 xs:ml-5  md:h-58 md:p-15 lg:p-12 text-justify xs:rounded-3xl md:rounded-[110px] ">
          <img className="md:hidden xs:w-[40%] xs:mx-28 xl:-mt-[30%] 2xl:ml-28" src={illus6} />
          <h3 className="md:mx-10 xs:mx-5 w-[90%] text-[18px] xs:text-xxs leading-md md:p-5 text-[#383D55]">
            As a team, we carry multiple decades of collective experience in Cloud, Data, and App Engineering. The core
            team has been practitioners since S3 was first announced, when Google laid GCP foundations with App Engine
            preview and when there was a thing called &quot;Windows Azure&quot;.
          </h3>
          <button className="bg-secondary-color  p-3 lg:w-[33%] mx-16 mt-6 xs:mb-6  rounded-xl mb-2 text-white text-xl">More About Us</button>
        </div>
      </div>
    </>
  );
}
