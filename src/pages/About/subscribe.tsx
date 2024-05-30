import React from "react";
import emailIcon from "common/components/Icons/Mail.svg";

export default function Subscribe() {
  return (
    <div className="flex  xs:flex-col md:m-20 xs:my-[20%] xs:p-4 justify-between">
      <div className=" flex md:w-[50%] xs:w-full xs:justify-center xs:items-center">
        <img className="md:w-[10%] xs:w-[10%] " src={emailIcon} />
        <span className="ml-10 xs:ml-4 text-xl text-header-color md:mt-4">
          <span>Subscribe To Newsletter</span>
        </span>
      </div>

      <div className="flex xs:w-[100%] xs:mt-10 w-[70%]">
        <input
          type="email"
          placeholder="Enter your email Address"
          className=" ml-auto p-4 border xs:text-xs text-header-color bg-card-color rounded-l-lg xs:w-full w-[60%]  "
        />
        <button className=" text-[18px] xs:text-xs rounded-3xl -ml-10 xs:w-[60%]  w-[25%] bg-secondary-color text-white">
          Subscribe !
        </button>
      </div>
    </div>
  );
}
