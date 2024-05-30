import React from "react";

const Line: React.FC<any> = ({ classNames }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="black"
        className={`${classNames}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </>
  );
};
export default Line;
