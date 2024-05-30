import React from "react";
import group from "common/components/Icons/circle lines.svg";



export default function GetInTouchForm() {
  return (
    <div className="bg-primary-color mt-[10%] xs:py-4 w-full h-full ">
      <div className="  absolute hidden xl:flex justify-start -ml-[17%]  lg:mt-[25%]  w-[80%]">
        <span className="flex flex-row space-x-3  font-poppins   rotate-90 xs:text-sm xl:-mr-[32.2%] text-6xl">
          <h2 className="rotate-180 decorate-1">Get In Touch </h2>
        </span>
      </div>
      <div>
        <div className="flex md:justify-end ml-auto xs:p-10">
          <div className="flex items-center xs:hidden justify-center w-[90%] -mr-[35%]">
            <img className="  h-[60%] " src={group} alt="Group2" />
          </div>

          <div className="bg-white xs:w-full md:rounded-l-[150px] z-0 md:rounded-r-3xl xs:rounded-3xl xs:p-10 md:p-20 md:my-20 w-[90%] shadow-lg">
            <h2 className="text-center text-header-color lg:-mt-[5%] xs:text-sm text-[40px] drop-shadow-sm">
              Get In{" "}
              <span className="text-secondary-color">
                <span>Touch</span>
              </span>
            </h2>
            <div className=" xs:mt-10 mt-20 ">
              <div className="grid grid-cols-1 md:gap-10 xs:gap-3 md:grid-cols-2 mt-5 text-[15px]">
                <input
                  className="w-full bg-gray-100 border text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="w-full bg-gray-100 border text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email Address*"
                />
                <input
                  className="w-full bg-gray-100 border text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Mobile*"
                />
                <input
                  className="w-full bg-gray-100 border text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="subject*"
                />
              </div>
              <div className=" xs:my-4 md:my-10">
                <textarea
                  placeholder="Message*"
                  className="w-full  h-32 bg-gray-100 text-[17px] border text-gray-900 mt-2  rounded-2xl focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 flex   text-center xs:justify-center md:justify-end">
                <button className="lg:w-[30%] text-center  xs:rounded-md text-[20px] xs:text-xxs  bg-secondary-color text-white p-3 md:rounded-3xl ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
