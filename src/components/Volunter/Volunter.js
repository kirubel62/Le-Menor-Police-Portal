import React from "react";
import "./Volunter.css";
import { Link } from "react-router-dom";
//
import icon1 from "./images/Vservice_img1.png";

const Volunter = () => {
  return (
    <div className="masterV">
      {/*  */}
      <div className="welcome-message">
        <h1>Welcome to Our Volunteer Program</h1>
        <p>
          At [Your Organization Name], we believe in the power of volunteering
          to make a difference in the lives of displaced people. By joining our
          volunteer program, you can contribute your skills, time, and
          compassion to help those in need.
        </p>
        <p>
          Whether you have a few hours to spare or are looking for a more
          long-term commitment, we have a variety of volunteer opportunities
          that cater to different interests and availability. Together, we can
          create a positive impact and provide support to displaced individuals
          and families.
        </p>
        <p>
          Join us today and be a part of something meaningful. Together, we can
          bring hope, comfort, and empowerment to those who need it the most.
        </p>
        <button className="join-button">Join Us</button>
      </div>

      {/*  */}
      <div className="grid-containerV">
        <Link to="/VolunteerOpportunities">
          <div class="grid-item">
            <img src={icon1} className="pic"></img>
            <h1>Volunteer Opportunities</h1>
          </div>
        </Link>

        <Link to="/VolunterRegistarationForm">
          <div class="grid-item">
            <img src={icon1} className="pic"></img>
            <h1>Register</h1>
          </div>
        </Link>

        {/* <Link to="/nearby">
          <div class="grid-itemV">
            <h1>Displaced People</h1>
          </div>
        </Link> */}

        <Link to="/nearby">
          <div class="grid-item">
            <h1>Give Hand For Those Near To you</h1>
          </div>
        </Link>

        <div class="grid-item">
          <h1>Coming Soon</h1>
        </div>

        <div class="grid-item">
          <h1>Coming Soon</h1>
        </div>

        <div class="grid-item">
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Volunter;
