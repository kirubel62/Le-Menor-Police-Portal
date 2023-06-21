import React from "react";
// import "./App.css";
//router
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./Home";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Donation from "../Donation/Donation";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    // <BrowserRouter>
    <>
      {/* <div className="_navbar">
        <Navbar />
      </div> */}

      <div className="_body">
        {/* <Routes>
          {/* <Route exact path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes> */}
      </div>
    </>
  );
};

export default Landing;
