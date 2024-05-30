import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Error403 } from "templates/errors";

interface LayoutProps {
  children: React.Component;
  params: any;
}

const Layout: React.FC<any> = ({ children, params }: LayoutProps) => {
  if (!params)
    return (
      <div>
        <Error403 />
      </div>
    );
  return (
    <>
      <div className="">{/* Warning message */}</div>
      <div>{/* Warning message */}</div>
      <div className="min-h-screen flex font-inter">
        {/* sidebar */}

        <main className="flex-1 min-w-0 bg-white font-inter">
          <>
            {/* <Header name={params.name} />
            <div>{children}</div> */}
          </>
        </main>
        {/* <ToastContainer /> */}
      </div>
    </>
  );
};

export default Layout;
