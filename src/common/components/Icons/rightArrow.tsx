import React from "react";

const RightArrow:React.FC<any>=({onClick})=>{
  return (
    <svg width="55" height="89" viewBox="0 0 55 89" onClick={onClick} className="cursor-pointer xs:w-10 xs:h-10 xs:mt-10 " fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 78.4683L33.9946 44.5L0 10.4575L10.4656 0L55 44.5L10.4656 89L0 78.4683Z" fill="#D9D9D9"/>
    </svg>
    
  );
}

export default RightArrow