import React from "react";
import { teamMembers } from "./constants";
import leftImage from "common/components/Icons/left circle.svg";

export default function Team() {
  const renderTeamMember = (member) => (
    <div key={member.id} className="flex flex-col space-y-10 items-center">
      <div className="border border-gray-400  lg:ml-12 xs:w-[60%] xs:mb-10 lg:w-[50%] lg:h-[50%] md:ml-[30%] rounded-lg p-2 text-center mt-20 ">
        <img
          src={member.imageUrl}
          alt={member.name}
          className=" xl:w-[20%] lg:w-[15%] md:w-[18%] md:h-[20%] xs:w-[30%] xs:h-[20%] text-center lg:-ml-[2%] xs:-mt-[30%] xs:mb-10 items-center md:-mt-[20%]   lg:-mt-[11%] 2xl:-mt-[9%] justify-center absolute"
        />
        <h2 className="font-semibold text-heading-color mt-4 xs:mt-6 ">{member.name}</h2>
        <h2 className=" text-secondary-color w-[100%] text-center  mb-2 text-[16px]">{member.role}</h2>
      </div>
    </div>
  );

  const renderTeamRows = () => {
    const rows = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
      const row = teamMembers.slice(i, i + 3);
      rows.push(
        <div key={i} className="md:grid md:grid-cols-3 md:gap-4 xs:flex xs:flex-col md:mb-8 md:mt-20">
          {row.map((member) => renderTeamMember(member))}
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <div>
        <img className="absolute xs:hidden  mt-[4%]" src={leftImage} />
        <h2 className="md:text-header xs:text-sm xs:text-center text-header-color mt-20 lg:mt-[40%] xl:mt-[20%]  mb-10 xs:mb-10 md:ml-[10%]">
          Meet our <span className="text-secondary-color">team</span>
        </h2>
        <div className="flex justify-end w-full md:hidden xl:block lg:relative">
          <span className="flex flex-row space-x-3 mt-[20%]    rotate-90 xs:text-xs xs:hidden absolute md:top-1/2 -right-[19%] transform ">
            <h2 className=" decorate text-6xl rotate-180">Meet our team </h2>
          </span>
        </div>
        {renderTeamRows()}
      </div>
    </>
  );
}
