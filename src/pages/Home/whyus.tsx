import React from "react";
import leftline from "common/components/Icons/leftline.svg";
import rightline from "common/components/Icons/rightline.svg";
import group from "common/components/Icons/Illus 2.svg";
import illus2 from "common/components/Icons/Illus 3.svg";
import illus3 from "common/components/Icons/Illus 4.svg";
import illus4 from "common/components/Icons/Illus 5.svg";
import About from "./about";
import Clients from "./clients";

export default function Whyus() {
  return (
    <>
      <div>
        <div className="flex xs:items-center xs:justify-center md:space-x-5">
          <img className="rotate-180 xs:w-[20%] md:w-[40%] xs:hidden " src={rightline}></img>
          <span className="flex  xs:text-sm xs:ml-10 md:text-subHeader  text-header-color lg:text-header 2xl:text-7xl md: drop-shadow-sm ">
            Why
            <h2 className="text-secondary-color ml-5 mr-10 ">Cloudside ?</h2>
          </span>
          <img className="md:w-[10%] xs:w-[10%] rotate-180 xs:hidden" src={leftline}></img>
        </div>
      </div>
      <div className=" flex flex-col  space-y-10 justify-center lg:mx-20 items-center md:text-justify xs:mx-6 md:mx-20 xs:text-justify lg:text-center  text-gray-400">
        <span className="  mt-10 text-header-color md:text-[25px] xs:text-xs">
          We have a simple, yet robustand effective process.
        </span>
        <h2 className=" mt-5 md:w-[60%] text-paragraph-color md:text-centerxs:mb-10 text-xs  ">
          While our engineering teams are young and innovative, we are also process oriented. Our simple, yet effective
          process caters to all of our customer needs and assures customer success.
        </h2>
      </div>
      {/* //Left  */}
      <div className="flex flex-row xs:hidden md:hidden lg:block absolute">
        <span className=" flex lg:-ml-[90%] mt-[80%] font-poppins st fon  md:-ml-64 xs:-ml-52  rotate-90 space-x-5  xs:text-sm text-7xl ">
          <h2 className="rotate-180 decorate">Cloudside ?</h2>
          <h2 className="rotate-180 decorate">Why</h2>
        </span>
      </div>
      <div className="flex flex-col xs:flex-col md:flex-col space-y-10 text-[#707070] xs:mt-[10%]  mt-20 xs:m-2">
        <div className="flex lg:flex-row xs:flex-col md:flex-col  justify-center items-center">
          <img className="xs:hidden md:hidden lg:block md:w-[50%] xl:ml-[10%] lg:ml-[2%] lg:w-[30%] text-center " src={group}></img>
          <div className="xs:w-[90%] md:w-[100%]   xs:ml-2 2xl:h-[70%] lg:ml-40 text-justify">
            <h2 className="xs:hidden md:text-header lg:text-subHeader xl:text-header md:ml-[10%]  text-heading-color md:mb-10">
              Discovery & Assessment{" "}
            </h2>
            <div className="bg-card-color xs:w-[100%] md:p-2 md:-mr-[1%] lg:-mr-0 xs:p-5 xl:w-[100%] xl:p-12 xl:h-[217px]   md:flex  md:text-justify xs:text-justify  md:rounded-l-full">
              <img className="lg:hidden md:w-[40%] " src={group}></img>
              <h2 className="md:hidden xs:text-[20px] mb-2 xs:ml-10 xs:mb-4  text-heading-color">
                Discovery & Assessment{" "}
              </h2>
              <h3 className="lg:mr-6 lg:ml-14 xs:ml-10 lg:p-3 xl:p-1 xs:text-xxs text-paragraph w-[80%] leading-md">
                We conduct manual and (or) semi- automated assessments, detailed workshops and stakeholder interviews to
                gain a deep understanding of requirements and the current environment. We also deliver deep-dive and
                hands-on sessions on Cloud, Kubernetes, Data to onboard you faster.
              </h3>
            </div>
          </div>
        </div>
        {/* <img src={roadline} className="xs:hidden absolute ml-52 mt-[300px]" alt={"fr"} >
          
        </img> */}

        {/* Right  */}

        <div className="flex lg:flex-row xs:flex-col xs:m-2 md:flex-col ">
          <div className="w-[70%] xl:w-full">
            <h2 className="xs:hidden md:text-header lg:text-subHeader md:text-center xl:ml-[17%]  xl:text-left 2xl:text-header xs:text-sm lg:mb-10 text-heading-color md:mb-2">
              Planning & Strategy
            </h2>
            <img className="xs:hidden md:absolute md:w-[30%] md:mt-2 lg:hidden" src={illus2}></img>
            <div className="bg-card-color  xs:mt-0 xs:m-4  md:flex md:justify-center md:items-center lg:w-[120%] xs:w-[130%] md:w-[140%]  text-justify  lg:h-[217px] xs:p-12  lg:-ml-[30%]  md:rounded-r-full">
              <img className=" md:w-[30%] md:hidden " src={illus4}></img>
              <div className=" flex  xs:flex-col lg:text-justify xs:w-[135%]  md:z-0 md:ml-48   xl:ml-96 lg:ml-[30%] lg:m-10 ">
                <h2 className="md:hidden xs:text-[20px] xs:mt-2 mb-2   text-heading-color"> Planning & Strategy</h2>
                <h3 className="xl:w-[80%] xs:w-[70%]  text-paragraph xl:m-28 md:m-10 lg:m-2  xs:text-xxs  leading-md">
                  {" "}
                  We build a custom Cloud Adoption Framework with sequencing and wave planning for large scale
                  engagements. Identifying low hanging fruits, re-architecting and Optimization opportunities. This
                  phase typically results in a detailed technical approach and proposal.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex lg:w-[30%] xl:w-[50%]">
            <img className="   lg:block  z-0 md:hidden  xs:hidden" src={illus2}></img>
          </div>
        </div>

        {/* Left */}
        <div className="flex lg:flex-row xs:flex-col justify-center xs:m-3 items-center">
          <img className="xs:hidden md:hidden lg:block lg:ml-[10%] lg:w-[30%] z-0" src={illus3}></img>
          <div className="xs:w-[90%] md:w-[100%]   xs:ml-2 2xl:h-[70%] xl:ml-40 text-justify">
            <h2 className="xs:hidden md:text-header lg:text-subHeader xl:text-header md:ml-[11%] xs:text-sm text-heading-color md:mb-10">
              Execution
            </h2>
            <div className="bg-card-color text-paragraph xs:w-[100%] lg:h-[217px] md:-mr-[1%] lg:-mr-0   md:p-2 xs:p-3   md:flex md:justify-center md:items-center md:text-justify    md:rounded-l-full">
              <img className="lg:hidden md:w-[40%]" src={illus3}></img>
              <h2 className="md:hidden xs:text-[20px] mb-2 xs:mt-5 ml-8   text-heading-color">Execution</h2>
              <h2 className="lg:mr-6 m-8 xs:text-xxs  xl:w-[70%]  text-paragraph leading-md">
                {" "}
                We love coming up with repeatable and automated solutions for oft- encountered problems. We can start
                from scratch and stand up a secure, reliable, and fully functional environment in a matter of hours.We
                are also process-oriented, with the right project management practices.
              </h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row xs:flex-col xs:m-2 md:flex-col ">
          <div className="w-[70%] lg:w-full">
            <h2 className="xs:hidden md:text-header lg:text-subHeader md:text-center lg:ml-[17%] lg:text-left xl:text-header xs:text-sm lg:mb-10 text-heading-color md:mb-2">
              Launch & Scale
            </h2>
            <img className="xs:hidden md:absolute md:w-[30%] md:mt-2 lg:hidden" src={illus4}></img>
            <div className="bg-card-color  xs:mt-0 xs:m-4  md:flex md:justify-center md:items-center lg:w-[120%] xs:w-[130%] md:w-[140%]  text-justify  lg:h-[217px] xs:p-12  lg:-ml-[30%]  md:rounded-r-full">
              <img className=" md:w-[30%] md:hidden " src={illus4}></img>
              <div className=" flex  xs:flex-col lg:text-justify xs:w-[135%]  md:z-0 md:ml-48   xl:ml-96 ">
                <h2 className="md:hidden xs:text-[20px] xs:mt-2 mb-2   text-heading-color"> Launch & Scale</h2>
                <h3 className="xl:w-[70%] xs:w-[70%]  text-paragraph xl:m-28 md:m-10   xs:text-xxs  leading-md">
                  {" "}
                  We help with scale, modernization and continuous management of your workloads on Cloud. Our Cloud
                  Manage service covers Well architected reviews, Continuous cost optimization, Security Audits, VAPT,
                  DDoS protection etc.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex lg:w-[50%]">
            <img className="   lg:block  z-0 md:hidden  xs:hidden" src={illus4}></img>
          </div>
          <div className="xl:flex justify-end    hidden l absolute w-[80%] ">
            <span className="xl:flex flex-row justify-end hidden space-x-3 ml-auto font-poppins rotate-90 xs:text-sm xl:-mr-[50.8%] text-6xl">
              <h2 className="rotate-180 decorate">Why cloudside? </h2>
            </span>
          </div>
        </div>
      </div>

      <About />
      <Clients />
    </>
  );
}
