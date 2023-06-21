import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
//
//images
import s1 from "./images/service_img1.png";
import s2 from "./images/service_img2.png";
import s3 from "./images/service_img3.png";
import s4 from "./images/service_img4.png";
import s6 from "./images/service_img6.png";
import s7 from "./images/service_img7.png";
import s8 from "./images/service_img8.png";
//
import { BrowserRouter } from "react-router-dom";

const Services = () => {
  return (
    <div className="Servicesmaster">
      <div class="Services-grid-container">
        <Link to="/Service1">
          <div class="Services-grid-item">
            <img src={s1} className="pic"></img>
            <h1>Register</h1>
          </div>
        </Link>

        {/* <Link to="/Service2">
          <div class="Services-grid-item">
            <img src={s1} className="pic"></img>
            <h1>Data</h1>
          </div>
        </Link> */}

        <Link to="/Service3">
          <div class="Services-grid-item">
            <img src={s2} className="pic"></img>
            <h1>Find Your Lost Ones</h1>
          </div>
        </Link>

        <Link to="/Service4">
          <div class="Services-grid-item">
            <img src={s3} className="pic"></img>
            <h1>Community Chats</h1>
          </div>
        </Link>

        <Link to="/Service8">
          <div class="Services-grid-item">
            <img src={s8} className="pic"></img>
            <h1>Volunters</h1>
          </div>
        </Link>

        <Link to="/Service5">
          <div class="Services-grid-item">
            <img src={s4} className="pic"></img>
            <h1>Health and Well-being</h1>
          </div>
        </Link>

        <Link to="/Service6">
          <div class="Services-grid-item">
            <img src={s6} className="pic"></img>
            <h1>Legal and Rights Information</h1>
          </div>
        </Link>

        <Link to="/Service7">
          <div class="Services-grid-item">
            <img src={s7} className="pic"></img>
            <h1>Community Integration</h1>
          </div>
        </Link>

        {/* <Link to="/">
          <div class="Services-grid-item">
            <img src={s1} className="pic"></img>
            <h1>Coming Soon</h1>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Services;
