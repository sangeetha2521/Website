import React from "react";
import leftline from "common/components/Icons/leftline.svg";
import rightline from "common/components/Icons/rightline.svg";
import TabsComponent from "common/components/tab";
import group from "common/components/Icons/Group-1.svg";

export default function Services() {
  return (
    <>
      <div className="flex  xs:justify-center xs:items-center space-x-5 ">
        <img className="md:w-[45%] xs:hidden md:ml-20" src={leftline}></img>
        <span className="flex xs:text-sm  text-header  ">
          Our
          <h2 className="text-secondary-color ml-5 md:mr-5 ">Services</h2>
        </span>
        <img className="md:w-[170%] xs:hidden" src={rightline}></img>
      </div>
      <div className=" flex justify-center xs:text-xs xs:mt-5 2xl:mx-80 md:w-[70%] lg:w-[57%] 2xl:mt-10 items-center md:text-justify md:mx-[20%] lg:mx-20  xs:text-justify lg:text-center  text-gray-400">
        <p className="drop-shadow-sm leading-md ">
          As a team, we bring decades of collective experience in Cloud, Data and App development. From a two-person
          startup to large conglomerates, our services are designed to assist you in every phase of your cloud-native
          journey.
        </p>
      </div>
      <div className="flex absolute">
        <img className=" mr-auto mt-[220%] xs:hidden " src={group} alt="Group2" />
      </div>
      <div className={" md:mt-5 mt-20 xs:h-full md:h-[80%] "}>
        <TabsComponent
          className=" border-secondary-color flex flex-col  text-heading-color text-justify xs:p-5 md:p-10 border  text-xs xs:rounded-[20px] md:rounded-[60px] "
          mainClassName="flex flex-col xs:text-sm md:justify-center md:p-20 xs:p-2  md:items-center "
        />
      </div>
    </>
  );
}
