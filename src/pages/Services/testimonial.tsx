import React, { useRef, useState } from "react";
import LeftArrow from "common/components/Icons/leftArrow";
import RightArrow from "common/components/Icons/rightArrow";

const TestimonialComponent = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = ["h", "oi", "k", "ja", "k", "ka"];

  const handleLeftArrowClick = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleRightArrowClick = () => {
    const nextIndex = startIndex + 1;
    const maxIndex = testimonials.length - 2;
    setStartIndex(Math.min(nextIndex, maxIndex));
  };

  return (
    <>
      <div className="flex flex-row xs:flex-col justify-between min-h-[80%] mt-5 2xl:ml-16 md:text-start xs:text-sm text-header">
        <div className="">
          <h2 className="text-header-color xs:text-center  mt-5 ml-5 mr-5">
            Client <h2 className="text-secondary-color mt-5">Testimonial</h2>
          </h2>
          <span className="flex xs:hidden flex-row xl:mt-20 space-x-10">
            <LeftArrow onClick={handleLeftArrowClick} />
            <RightArrow onClick={handleRightArrowClick} />
          </span>
        </div>
        <div className="md:w-[70%] xs:mt-10 overflow-hidden bg-white">
          <div className="flex xs:ml-[5%] flex-row space-x-10 mb-10 rounded-tl-[250px]  h-[575px] bg-primary-color p-10 lg:ml-[18%] ">
            <div
              className="flex  space-x-10 transition-transform duration-500 lg:-ml-[20%] ease-in-out"
              style={{ transform: `translateX(-${startIndex * 70}%)` }}
            >
              {testimonials.slice(startIndex, startIndex - 4).map((testimonial, index) => (
                <div
                  key={index}
                  className=" mt-20 md:w-[507px] md:h-[320px] xs:w-full xs:h-[90%] rounded-[40px] bg-white   border shadow-2xl border-gray-200 text-gray-800 font-light mb-6"
                >
                  <div className="flex  p-10 items-center">
                    <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 ">
                      <img
                        src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?w=360&t=st=1709282285~exp=1709282885~hmac=8398ade098bb3a68b26b57735fa1a82c7cfaa57f56a16db24961445d9eaea507"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-paragraph uppercase text-gray-600">Kris Stanton.</h6>
                    </div>
                  </div>
                  <div className="mx-10">
                    <p className="text-paragraph">
                      <span className="text-paragraph text-gray-400 mr-1"></span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate
                      quas totam!
                      <span className="leading-none italic font-bold text-gray-400 ml-1"></span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="flex xs:justify-center xs:items-center md:hidden flex-row xl:mt-20 space-x-10">
          <LeftArrow onClick={handleLeftArrowClick} />
          <RightArrow onClick={handleRightArrowClick} />
        </span>
      </div>
    </>
  );
};

export default TestimonialComponent;
