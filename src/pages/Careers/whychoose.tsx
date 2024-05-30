import React from "react";
import rightArrow from "common/components/Icons/side arrow with circle.svg";
import circle from "common/components/Icons/Circle.svg";
import { contents, jobs } from "./constants";


export default function Whychoose() {


  return (
    <div className="flex flex-col space-x-5 mt-10">
      <div className="flex flex-col justify-center items-center xs:text-sm text-5xl">
        <h2 className="text-header-color text-center drop-shadow-sm ml-5 mr-5">
          Why choose <span className="text-secondary-color">Cloudside?</span>
        </h2>
      </div>
      <div className="flex flex-row xs:hidden md:hidden lg:block absolute">
        <span className=" flex lg:-ml-[105%] mt-[140%] font-poppins st fon  md:-ml-64 xs:-ml-52  rotate-90 space-x-5  xs:text-sm text-5xl ">
          <h2 className="rotate-180 decorate-2"> choose Cloudside ?</h2>
          <h2 className="rotate-180 decorate-2">Why</h2>
        </span>
      </div>
      <div className="flex flex-wrap  m-20 justify-center leading-md">
        {contents.map((item, index) => (
          <div
            key={item.id}
            className={`lg:w-[40%]  xs:w-[120%] lg:p-8 border xs:rounded-md border-[#9D9D9D]  text-card-text-color bg-card-color  mr-10  ${
              index % 2 === 0 ? ` ${item.displayStyle} xs:rounded-md  mt-3 mb-10` : ` xs:rounded-md ${item.displayStyle} mt-3 mb-10`
            }  `}
          >
            <div className=" p-5 ml-[10%] md:p-10 lg:p-5  text-justify ">
              <h3 className=" text-subHeader text-header-color lg:mt-5">{item.heading}</h3>
              <h3 className=" text-paragraph text-paragraph-color drop-shadow-sm mt-10">{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <h2 className="text-header-color md:text-center xs:text-sm text-header drop-shadow-sm">
          Want to Join Team <span className="text-secondary-color">Cloudside?</span>
        </h2>
        <img src={circle} className="absolute top-0 right-0 -mt-[10%] w-[15%]" alt="Circle Image" />
      </div>
      <h2 className="md:text-center text-paragraph-color drop-shadow-sm mt-5 xs:text-xs text-paragraph">
        Check out our openings form below and fill the application form by clicking on it
      </h2>

      <div className="flex flex-col md:justify-center items-center xs:mt-10 md:mt-20 lg:ml-[20%] ">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-center m-2 rounded-xl xs:p-3 md:p-8 border border-[#9D9D9D] lg:w-[70%] md:w-[90%] bg-white shadow-md relative"
          >
            <span className="w-full flex md:items-center">
              <span className="text-header-color xs:text-xs text-[25px]">{job.jobTitle}</span>
              <span className="md:ml-[50%] mr-2 xs:text-xs text-[18px] text-[#707070]">{job.jobLocation}</span>
              <img className="ml-auto xs:w-[10%]" src={rightArrow} alt="Right Arrow" />
            </span>
          </div>
        ))}
        <h2 className="xs:text-xs md:text-[25px] xs:m-10  md:m-20 text-center text-paragraph-color">
          Want To Know About The Company ?<span className="text-secondary-color"> CLICK HERE</span>
        </h2>
      </div>
    </div>
  );
}
