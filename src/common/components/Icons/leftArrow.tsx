import React from "react";

const LeftArrow:React.FC<any>=({onClick})=>{
  return (
    <svg width="55" height="89" viewBox="0 0 55 89" onClick={onClick} className="cursor-pointer xs:w-10 xs:h-10 xs:mt-10 " fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55 78.4683L21.0054 44.5L55 10.4575L44.5344 0L0 44.5L44.5344 89L55 78.4683Z" fill="#D9D9D9" />
    </svg>
  );
}

export default LeftArrow