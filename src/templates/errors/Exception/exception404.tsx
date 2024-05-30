import React from "react";
import config from "./config";

interface Props {
  type: any;
  title: any;
  desc: any;
  desc2: any;
  actions: any;
}

const Exception404: React.FC<Props> = ({ type, title, desc, actions, desc2 }: Props): any => {
  return (
    <>
      <div className="max-w-[1080px] mt-40 mx-auto flex flex-row ">
        <div className="leading-relaxed">
          <div className="w[10%] flex flex-col items-center justify-center">
            <img src={config[type].img} alt={config[type].title} />
            <img src={config[type].imgSrc} alt={config[type].title} />
          </div>
        </div>
        <div className=" flex flex-col items-left leading-relaxed text-[20px] font-raleway font-normal ml-14  text-[#0C4E96]">
          <p className=" text-[70px] font-raleway font-medium   text-[#0C4E96]">{title || config[type].title}</p>
          <p className=" text-[28px] font-semibold ">{desc || config[type].desc}</p>
          <p className=" text-[24px] mt-4 ">{desc2 || config[type].desc2}</p>
          <p className="  mt-4 ">{actions}</p>
        </div>
      </div>
    </>
  );
};
export default Exception404;
