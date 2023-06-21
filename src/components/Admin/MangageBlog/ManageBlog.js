import React from "react";
import "./ManageBlog.css";
//
import { Link } from "react-router-dom";
import logo1 from "./images/News.png";
import logo2 from "./images/Documentary.png"

const MangeBlog = () => {
  return (
    <div className="MBlogMaster">
      <Link to="/News">
        <div>
          <img src={logo1}></img>
          <h1>Manage News</h1>
        </div>
      </Link>

      <Link to="/Story">
        <div>
          <img src={logo2}></img>
          <h1>Manage Stories</h1>
        </div>
      </Link>

      <Link>
        <div>
          <img src={logo1}></img>
          <h1>Advocacy and Activism</h1>
        </div>
      </Link>

      <Link>
        <div>
          <img src={logo1}></img>
          <h1>Mental Health and Wellbeing</h1>
        </div>
      </Link>
    </div>
  );
};

export default MangeBlog;
