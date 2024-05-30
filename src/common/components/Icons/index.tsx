import React from "react";

export const Main: React.FC<any> = () => {
  return (
    <div className="text-center py-5 bg-gray-800">
      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <img src="/icons/github-icon.svg" alt="github" width="28" height="29" />
        </li>
        <li className="mx-3">
          <img src="/icons/twitter-icon.svg" alt="twitter" width="28" height="28" />
        </li>
        <li className="mx-3">
          <img src="/icons/youtube-icon.svg" alt="youtube" width="28" height="29" />
        </li>
        <li className="mx-3">
          <img src="/icons/linkedin-icon.svg" alt="linkedin" width="28" height="32" />
        </li>
      </ul>
    </div>
  );
};
