import React from "react";
import officeImgae1 from "common/components/Icons/left image.svg";
import officeImgae2 from "common/components/Icons/right image.svg";
import Subscribe from "./subscribe";

export default function Office() {
  return (
    <>
      <div className="bg-card-color text-[16px] xs:rounded-3xl md:rounded-[170px] mt-[20%] items-start">
        <div className="p-5">
          <h2 className="xs:text-sm  text-[35px] text-header-color text-center ">
            Welcome To Our <span className="text-secondary-color">Office</span>{" "}
          </h2>
        </div>

        <h2 className="mb-4 xs:text-xs  text-center xs:text-justify  md:ml-[20%] text-paragraph-color md:w-[60%] xs:p-3 ">
          At Cloudside, we think that innovation is fueled by a dynamic and cooperative work environment. Enter our
          workspace, where concepts become reality and our staff flourishes in a successful atmosphere.
        </h2>
        <div className="flex flex-col md:flex-row leading-md justify-center xs:p-4 md:ml-28 mt-[5%] items-start md:items-center ">
          {/* Left Content */}

          <div className=" md:w-1/2 text-justify  ">
            <h2 className="text-subHeader text-header-color mb-4  xs:text-sm">Our Area</h2>
            <h2 className="mb-10 xs:text-xs text-paragraph-color md:w-[110%] ">
              Our office is a center of production and innovation, not merely a place to work. We`ve created an
              environment that encourages creativity and teamwork, from the open floor plan to the comfortable
              collaborative nooks. Our offices are flooded with natural light, which creates a welcoming environment
              that promotes energy and attention.
            </h2>
            <h2 className="text-subHeader text-header-color mb-4  xs:text-sm"> Collaboration Focused Culture</h2>
            <h2 className="mb-10 xs:text-xs text-paragraph-color md:w-[110%] ">
              The foundation of all we do is teamwork. We purposefully planned our office arrangement to encourage team
              member engagement and collaboration. Collaboration is ingrained in every aspect of our everyday
              operations, whether its over a casual conversation by the coffee maker or brainstorming session in one of
              our special meeting rooms.
            </h2>
          </div>
          {/* Right Image */}
          <div className="md:w-[50%] flex justify-center">
            <img
              src={officeImgae2}
              alt="Office Image"
              className="md:w-[70%] xs:w-[100%] border-secondary-color border-4 card"
            />
          </div>
        </div>
        <div className="flex flex-col md:ml-8 xs:p-4 md:flex-row justify-center items-start md:items-center mt-6">
          {/* Left Image */}
          <div className="md:w-1/2 xs:w-[100%] mb-20  md:pr-4 flex justify-center">
            <img
              src={officeImgae1}
              alt="Office Image"
              className="md:w-3/4 xs:[10%] xs:m-10 border-secondary-color border-4 card "
            />
          </div>
          {/* Right Content */}
          <div className=" md:w-[50%] xs:p-2  text-justify md:mr-28 leading-md">
            <h2 className="text-subHeader text-header-color mb-4 xs:text-sm">Creativity on Every Desk</h2>
            <h2 className="mb-10 text-paragraph-color xs:text-xs  ">
              Our office is a center of production and innovation, not merely a place to work. Weve created an
              environment that encourages creativity and teamwork, from the open floor plan to the comfortable
              collaborative nooks. Our offices are flooded with natural light, which creates a welcoming environment
              that promotes energy and attention.
            </h2>
            <h2 className="text-subHeader text-header-color xs:text-sm mb-4">Social and community Environments</h2>
            <h2 className="mb-10 text-paragraph-color xs:text-xs  text-[16px]">
              The foundation of all we do is teamwork. We purposefully planned our office arrangement to encourage team
              member engagement and collaboration. Collaboration is ingrained in every aspect of our everyday
              operations, whether its over a casual conversation by the coffee maker or brainstorming session in one of
              our special meeting rooms.
            </h2>
          </div>
        </div>
        <div />
      </div>
      <Subscribe />
    </>
  );
}
