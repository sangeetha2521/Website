import error500 from "./error500.svg";
import error403 from "./error403.svg";
import error404 from "./error404.svg";
import error4044 from "./error404-2.svg";
import error403Font from "./error403-font.svg";

const config = {
  403: {
    desc: "Not authorized",
    img: error403,
    imgSrc: error403Font,
    title: "403",
  },
  404: {
    desc: "oops !",
    desc2:"We couldn't find the page",
    img: error404,
    imgSrc: error4044,
    title: "Login again to continue the session",
  },
  500: {
    desc: "Error",
    img: error500,
    title: "500",
  },
};

export default config;
