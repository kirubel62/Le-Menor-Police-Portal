import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
//icons
import logo1 from "./images/Blog.png";
import logo2 from "./images/Account.png";
import logo3 from "./images/TechnicalSupport.png";
import logo4 from "./images/Find.png";
//

const Admin = () => {
  return (
    <div>
      <div className="Adminmaster">
        <Link to="/ManageBlog">
          <div className="Admincard">
            <img src={logo1}></img>
            <h1>Manage Blog</h1>
          </div>
        </Link>

        <Link to="/ManageAccount">
          <div className="Admincard">
            <img src={logo2}></img>
            <h1>Manage Account</h1>
          </div>
        </Link>

        <Link to="/ManageBlog">
          <div className="Admincard">
            <img src={logo3}></img>
            <h1>Customer Support</h1>
          </div>
        </Link>

        <Link to="/ManageBlog">
          <div className="Admincard">
            <img src={logo4}></img>
            <h1>Find Lost Ones Request</h1>
          </div>
        </Link>

        <Link to="/ManageBlog">
          <div className="Admincard">
            <img src={logo1}></img>
            <h1>Manage Blog</h1>
          </div>
        </Link>

        <Link to="/ManageBlog">
          <div className="Admincard">
            <img src={logo1}></img>
            <h1>Manage Blog</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
