import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tabFields } from "./constants";
import Lottie from "react-lottie";

const TabsComponent: React.FC<any> = ({ className, mainClassName }) => {
  const [tabId, setOpenTab] = useState(1);
  const [hoverStates, setHoverStates] = useState(tabFields.map(() => false));


  const handleMouseEnter = (tabIndex: number) => {
    setHoverStates((prevStates) => [...prevStates.slice(0, tabIndex), true, ...prevStates.slice(tabIndex + 1)]);
  };

  const handleMouseLeave = (tabIndex: number) => {
    setHoverStates((prevStates) => [...prevStates.slice(0, tabIndex), false, ...prevStates.slice(tabIndex + 1)]);
  };

  const renderTabContent = (properties: any) => {
    return properties?.map((property, tabIndex) => {
      return (
        <div
          key={property.name}
          className={className}
          onMouseEnter={() => handleMouseEnter(tabIndex)}
          onMouseLeave={() => handleMouseLeave(tabIndex)}
        >
          <div key={property.name} className="flex items-center justify-start">
            <div className="flex-shrink-0  rounded-3xl">
              <Lottie
                options={property.defaultOptions}
                height={70}
                width={70}
                isPaused={!hoverStates[tabIndex]}
                isStopped={!hoverStates[tabIndex]}
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () =>
                      setHoverStates((prevStates) => [
                        ...prevStates.slice(0, tabIndex),
                        false,
                        ...prevStates.slice(tabIndex + 1),
                      ]),
                  },
                ]}
              />
            </div>
          </div>
          <h2 className="md:text-[28px] drop-shadow-sm mt-6 xs:text-sm   xl:text-start">{property.name}</h2>
          <h3 className="text-card-text-color text-[16px] mt-6">{property.description}</h3>
          <h3 className="text-[16px] text-card-text-color mt-2">{property.keyWords}</h3>
        </div>
      );
    });
  };

  return (
    <div>
      <div className={mainClassName}>
        <div className="mb-6 md:w-[60%] lg:w-[32%] xs:space-x-4 xs:w-[30%]  flex lg:space-x-[40%] xs:justify-start xs:items-start  md:justify-center md:items-center rounded-lg ">
          {tabFields.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setOpenTab(tab.id)}
              className={`flex-1 py-2 md:px-10 xs:px-3 text-3xl xs:text-sm    rounded-xl focus:outline-none  transition-all duration-300  ${
                tabId == tab.id ? " text-white bg-secondary-color " : "text-card-text-color drop-shadow-sm "
              }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {tabFields.map((tab) => (
          <>
            <div
              key={tab.id}
              className={`transition-all mt-5 ${
                tabId === tab.id ? "block" : "hidden"
              } xs:flex xs:flex-col md:grid md:grid-cols-2 md:w-full  xs:w-full   lg:w-[78%] xs:space-y-3 md:mx-20 md:gap-10 duration-300`}
            >
              {tabId === tab.id && renderTabContent(tab.properties)}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
