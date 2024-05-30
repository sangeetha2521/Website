import React, { useState } from "react";
import { faqs } from "./constants";

export default function Faq() {


  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="relative ">
      <div className="bg-primary-color overflow-hidden  xs:hidden rounded-t-3xl xs:p-4  md:p-44 absolute bottom-0 left-0 right-0 z-0">
        <div className="container mx-auto "></div>
      </div>
      <div className=" mt-20  flex flex-col bg-white relative z-0 md:p-10 xs:mx-4 md:mx-10 lg:mx-24 md:w-[90%] xs:rounded-md rounded-[80px] border-2">
        <h2 className="text-subHeader text-secondary-color xs:text-sm  text-center">FAQ`S</h2>
        <h3 className="text-subHeader drop-shadow-sm text-header-color  xs:text-xs  text-center">Frequently asked questions</h3>
        <div className="lg:m-24 w-[90%] flex xs:mx-3    flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`accordion-item md:border-b-2 md:p-10 xs:p-10 ${index % 2 ? "  xs:border-y-2" : ""} ${
                activeAccordion === index ? "active" : ""
              }`}
            >
              <h2 className="flex justify-between  text-[20px] xs:text-xs text-header-color">
                <button
                  type="button"
                  className="accordion-button"
                  aria-expanded={activeAccordion === index ? "true" : "false"}
                  aria-controls={`accordion-body-${index}`}
                >
                  {faq.question}
                </button>

                <svg
                  data-accordion-icon
                  className={`w-7 h-7 bg-gray-200 rounded-full  shrink-0 rotate-${
                    activeAccordion === index ? "180" : "0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </h2>
              <div
                id={`accordion-body-${index}`}
                className={`accordion-collapse ${
                  activeAccordion === index
                    ? "show md:border-2 text-heading-color rounded-xl xs:text-xxs mt-5 text-paragraph bg-card-color p-10"
                    : ""
                }`}
              >
                <div className="accordion-body leading-md ">{activeAccordion === index && <h2>{faq.answer}</h2>}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 xs:hidden">FAQ</div>
    </div>
  );
}
