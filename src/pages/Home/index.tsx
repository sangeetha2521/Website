import React, { useEffect, useState } from "react";
import group1 from "common/components/Icons/Group.svg";
import group2 from "common/components/Icons/Group-2.svg";
import group3 from "common/components/Icons/Group-3.svg";
import illustrator from "common/components/Icons/hero illus.svg";
import { technologyPartners } from "./constants";
import Services from "../Services";
import Whyus from "./whyus";

const Home: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="">
        <div className="flex flex-col space-y-10 overflow-x-hidden lg:space-y-20 justify-center  xs:m-8 bg-white">
          <div className="flex flex-col lg:w-[100%] xs:w-full lg:flex-row ">
            <div className="flex lg:justify-center z-0   lg:w-3/4">
              <div className="flex flex-col xs:mx-10 md:items-center md:justify-center md:m-5 lg:items-start  lg:mx-20 lg:my-32 lg:my-34 space-y-6 ">
                <h2 className="text-secondary-color xs:text-paragraph md:text-[18px]  ">
                  Welcome to a New Era of Innovation and Efficiency
                </h2>
                <h2 className="text-heading-color xs:text-sm md:tracking-wider md:leading-[60px] md:text-subHeader lg:text-header xl:text-header   ">
                  Unleash the Power of
                  <h3 className="text-secondary-color md:text-subHeader md:tracking-[4px] lg:text-header">
                    Cloud Technology
                  </h3>
                </h2>

                <p className="text-[#9D9D9D] text-paragraph xs:text-xs  text-justify xs:w-full w-[60%]">
                  We are your trusted team of cloud-native and data problem solvers, helping you drive the best business
                  outcomes with cloud as a catalyst.
                </p>
                <div className="flex ">
                  <img className="-ml-20 xs:-mt-[40%] lg:block hidden absolute mt-[4%] " src={group1} alt="Group1" />
                </div>
                <button className="flex bg-secondary-color xs:-mt-[6%] lg:text-xl xs:text-paragraph justify-center text-center xs:p-2 text-white md:p-4 lg:w-[316px] md:w-[70%] xs:w-full rounded-md">
                  Get Started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="flex ml-3 lg:mt-1 font-bold w-8 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className=" xs:mt-6  2xl:mt-[3%]  xs:w-full  align-top lg:w-[50%] md:w-[50%]  md:flex md:justify-center md:items-center  ">
              <img
                className={` lg:mt-[3%] lg:w-[100%] md:ml-[70%]  lg:-ml-[22%] h-[90%] ${
                  isScrolling && "md:animate-fade-left md:animate-once md:*:animate-delay-500 md:animate-ease-in-out"
                }`}
                src={illustrator}
                alt="Illustrator"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <img
                className="ml-auto relative hidden lg:block md:-mt-[70%]  lg:-mt-[60%] 2xl:-mt-[40%]"
                src={group3}
                alt="Group2"
              />
            </div>
            <img
              className="ml-auto relative  hidden lg:block md:-mt-[60%] lg:-mt-[50%] 2xl:-mt-[20%]"
              src={group2}
              alt="Group1"
            />
          </div>
          <div className="flex xs:justify-start  md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke=""
              className="bg-[#F66A1B73] z-0 rounded-sm 2xl:-mt-[6%] -mr-20 xs:hidden w-[24%] h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>

            <section className="flex flex-col md:-mt-[10%] lg:p-4  lg:-mt-[6%] lg:-mb-5 text-white lg:rounded-[80px] shadow-gray-500 shadow-lg xs:text-sm xs:rounded-3xl md:rounded-3xl xs:w-full xs:mx-auto xs:h-full md:h-36  bg-primary-color md:z-0 lg:w-full lg:h-52 sm:w-[60%] md:w-[70%]">
              <h3 className="flex   md:mx-auto xs:text-xs xs:mt-5 xs:justify-center xs:text-center xs:mx-auto text-[35px]">
                Technology <span className="text-secondary-color xs:text-xs r ml-2">Partners</span>
              </h3>
              <div className="flex xs:flex-col xs:space-y-5  xs:justify-center md:flex-row items-center justify-center m-2  xl:space-x-6">
                {technologyPartners.map((technology, index) => (
                  <div
                    key={index}
                    className={`flex md:flex-row justify-center text-center items-center ${
                      isScrolling && "animate-fade-left animate-once animate-delay-[1000ms] animate-ease-in "
                    } xs:flex-col xs:rounded-xl xs:w-[60%] p-4 2xl:w-[16%] xs:h-[60px] md:h-[60%] text-black rounded-2xl bg-white border shadow-xl border-black`}
                  >
                    <img className=" flex  h-full" src={technology.img} alt={technology.label} />
                  </div>
                ))}
              </div>
            </section>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke=""
              className="flex self-end -ml-24 xs:hidden bg-[#F66A1B73] xs:w-full rounded-sm w-[34%] h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </div>
          <div className="flex flex-col">
            <Services />
          </div>
        </div>
      </div>
      <div>
        <Whyus />{" "}
      </div>
    </>
  );
};

export default Home;
