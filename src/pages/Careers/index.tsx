import React from "react";
import frame from "common/components/Icons/Frame.svg";
import Whychoose from "./whychoose";
import dotline from "common/components/Icons/dotlines.svg"

export default function Careers() {
  return (
    <>
      <div className="flex flex-col space-x-5 lg:mt-10">
        <div className="flex flex-col justify-center items-center xs:text-sm text-header">
          <h2 className=" text-heading-color drop-shadow-sm text-center mt-6 ml-5 mr-5 xs:text-sm">Careers</h2>
          <h2 className=" text-paragraph text-center xs:text-xs  text-paragraph-color w-[70%] leading-md  drop-shadow-sm xs:text-justify xs:m-5 flex mt-5">
            At Cloudside, we firmly believe in harnessing the potential of exceptional individuals collaborating to
            achieve remarkable outcomes. If you possess a strong passion, innovative mindset, and are eager to make a
            significant difference, we warmly encourage you to explore the various prospects available to become a part
            of our vibrant team.
          </h2>
          <button className="bg-secondary-color xs:w-[70%] p-3 w-[20%] mt-10 rounded-3xl mb-10 text-white text-[20px] xs:text-xs">Join Us</button>
          <img src={frame} />
          <img className=" xs:hidden  relative lg:-mt-[8%]   ml-auto" src={dotline}/>
        </div>

        <Whychoose/>
      </div>
    </>
  );
}
