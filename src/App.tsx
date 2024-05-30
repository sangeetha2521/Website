import Home from "pages/Home";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./styles/global.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "state/store";
import {Header} from "common/container/Layout/header";
import { Footer } from "common/components";
import Services from "pages/Services/servicesList";
import About from "pages/About";
import Careers from "pages/Careers";

const APP: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header activeLink={activeLink} onLinkClick={handleLinkClick} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <Services />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer activeLink={activeLink} onLinkClick={handleLinkClick} />
      </BrowserRouter>
    </Provider>
  );
};

export default APP;
