import React, { ReactElement } from "react";
import config from "./config";

interface Props {
  type: any;
  title: any;
  desc: any;
  actions: any;
}

const Exception403: React.FC<Props> = ({ type, title, desc, actions }: Props): any => {
  return (
    <>
      <div className="max-w-[1080px] h-[calc(100vh-80px)] relative mx-auto flex justify-between flex-row">
        <div className="leading-relaxed text-center">
          <div className="flex px-44 mt-12 items-center justify-center space-x-6">
            <img src={config[type].imgSrc} alt={config[type].title} />
            <p className="text-[26px] font-raleway font-semibold px-4 text-[#0C4E96]">{desc || config[type].desc}</p>
          </div>
          <p className="text-[24px] font-raleway font-light text-[#0C4E96] text-center">
            {title || config[type].title}
          </p>
          <div className="mt-8">{actions}</div>
          <img className="absolute left-0 right-0 bottom-0" src={config[type].img} alt={config[type].title} />
        </div>
      </div>
    </>
  );
};

export default Exception403;
