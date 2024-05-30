import React from "react";

import TabsComponent from "common/components/tab";
import group from "common/components/Icons/dotlines.svg";
import Testimonial from "./testimonial";
import GetInTouchForm from "./getInTouchForm";
import Faq from "./faq";


export default function Services() {
  return (
    <>
      <div className="flex justify-center items-center space-x-5 lg:mt-10  ">
        <div className="flex flex-col xs:text-sm text-header  ">
          <h2 className="text-header-color text-center ml-5 mr-5 mb-6 ">Services</h2>
          <h2 className="text-header-color text-center ml-5 mr-5 xs:text-md text-subHeader ">
            Anything cloud, <span className="text-secondary-color font-light"> Everything cloud!</span>
          </h2>
        </div>
      </div>
      <div className=" flex justify-center xs:m-5 2xl:mx-52 2xl:mt-10 items-center md:text-justify lg:mx-18 md:m-10  xs:text-justify lg:text-center text-card-text-color">
        <h2 className="drop-shadow-sm xs:text-xxs text-paragraph ">
          As a team, we bring decades of collective experience in Cloud, Data and App development. From a two-person
          startup to large conglomerates, our services are designed to assist you in every phase of your cloud-native
          journey.
        </h2>
      </div>
      <div className="flex absolute">
        <img className=" mr-auto w-[90%] mt-5 xs:hidden md:hidden lg:block " src={group} alt="Group2" />
      </div>

      <div className={" md:mt-5 xs:mt-5 lg:mt-20 xs:h-full md:h-[80%] "}>
        <TabsComponent
          className="bg-[#F8F7F7] flex flex-col space-y-4 text-heading-color w-[100%] text-justify xs:p-6 p-8 border-2  text-xl rounded-[50px] hover:bg-[#FFCECE]"
          mainClassName="flex flex-col md:justify-center md:p-20 xs:p-10  md:items-center "
        />
        <div className="lg:flex justify-end xl:-mt-96  hidden l absolute w-[80%]">
          <span className="xl:flex flex-row justify-end hidden space-x-3 ml-auto font-poppins   rotate-90 xs:text-sm xl:-mr-[35.8%] text-6xl">
            <h2 className="rotate-180 decorate">Services </h2>
          </span>
        </div>
      </div>

      <Testimonial />
      <GetInTouchForm />
      <Faq />
    </>
  );
}
