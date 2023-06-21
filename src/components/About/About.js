import React from "react";
import "./About.css";

import teamMember1 from "./images/team.png";
import teamMember2 from "./images/team.png";
import teamMember3 from "./images/team.png";
import teamMember4 from "./images/team.png";
import teamMember5 from "./images/team.png";
import reactjs from "./images/React.png";
import firebase from "./images/Firebase.png";
import map from "./images/Map.png";
import geoloc from "./images/Geolocation.png";
import api from "./images/Apipng.png";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Project</h2>
      <p>
        We are a dedicated team of Unity University students who are passionate
        about supporting displaced individuals in Ethiopia. Our project, built
        using React.js and Firebase, aims to provide vital assistance and
        resources to those in need, promoting their well-being and facilitating
        their integration into society.
      </p>

      <h3>Our Goals</h3>
      <ul>
        <li>
          Providing essential services and support to displaced individuals in
          Ethiopia, including shelter, healthcare, and education.
        </li>
        <li>
          Fostering a sense of community and promoting social integration among
          displaced individuals.
        </li>
        <li>
          Advocating for the rights and well-being of displaced individuals at
          the local and national levels.
        </li>
      </ul>

      <h3>Our Organization</h3>
      <p>
        Our project is implemented by a team of dedicated students from Unity
        University. With a strong commitment to making a positive impact, we
        leverage our skills, knowledge, and resources to address the challenges
        faced by displaced individuals in Ethiopia. We collaborate with various
        organizations and stakeholders to ensure the effectiveness and
        sustainability of our initiatives.
      </p>

      <h3>Impact and Achievements</h3>
      <ul>
        <li>
          Reached over 500 displaced individuals with emergency relief aid.
        </li>
        <li>
          Established a community center providing educational and vocational
          training programs.
        </li>
        <li>
          Successfully advocated for the rights of displaced individuals,
          resulting in improved access to healthcare and legal support.
        </li>
      </ul>

      <h3>Team Members</h3>
      <div className="team-members">
        <div className="team-member">
          <img src={teamMember1} alt="Team Member 1" />
          <h4>John Doe</h4>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Team Member 2" />
          <h4>Jane Smith</h4>
          <p>Communications Specialist</p>
        </div>
        <div className="team-member">
          <img src={teamMember3} alt="Team Member 3" />
          <h4>Michael Johnson</h4>
          <p>Program Coordinator</p>
        </div>
        <div className="team-member">
          <img src={teamMember4} alt="Team Member 4" />
          <h4>Sarah Williams</h4>
          <p>Volunteer Coordinator</p>
        </div>
        <div className="team-member">
          <img src={teamMember5} alt="Team Member 5" />
          <h4>David Brown</h4>
          <p>Outreach Coordinator</p>
        </div>
      </div>

      <h3>Partnerships</h3>
      <p>
        We collaborate with various organizations and stakeholders to amplify
        our impact and provide comprehensive support to displaced individuals in
        Ethiopia. Our partners include:
      </p>
      <ul>
        <li>Organization A</li>
        <li>Organization B</li>
        <li>Organization C</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>React.js</li>
        <img
          src={reactjs}
          style={{ width: "100px", height: "100px" }}
          alt="Team Member 1"
        />
        <li>Firebase</li>
        <img
          src={firebase}
          style={{ width: "100px", height: "100px" }}
          alt="Team Member 1"
        />
        <li>Various APIs</li>
        <img
          src={api}
          style={{ width: "100px", height: "100px" }}
          alt="Team Member 1"
        />
        <li>Geolocation</li>
        <img
          src={geoloc}
          style={{ width: "100px", height: "100px" }}
          alt="Team Member 1"
        />
        <li>Reverse Geolocation</li>
        <img
          src={map}
          style={{ width: "100px", height: "100px" }}
          alt="Team Member 1"
        />
      </ul>

      <h3>Get Involved</h3>
      <p>
        We welcome individuals and organizations to join us in making a
        difference. Whether you'd like to volunteer, donate resources, or
        collaborate with us, your support is invaluable. Together, we can
        empower displaced individuals and create a more inclusive society.
      </p>
      <p>
        Contact us at info@supportorganization.org for more information on how
        to get involved.
      </p>
    </div>
  );
};

export default About;
