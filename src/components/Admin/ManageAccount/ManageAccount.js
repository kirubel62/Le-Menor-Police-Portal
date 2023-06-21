import React from "react";
import "./ManageAccount.css";
import { Link } from "react-router-dom";
//
import logo1 from "./images/Contacteditor.png";
//

const ManageAccount = () => {
  return (
    <div className="ManageAccount">
      <Link to="/UpadateAccount">
        <div className="MAcard">
          <img src={logo1}></img>
          <h1>Update Displaced Person Account</h1>
        </div>
      </Link>

      <Link to="/ManageAccount">
        <div className="MAcard">
          <img src={logo1}></img>
          <h1>Delate Account</h1>
        </div>
      </Link>

      <Link to="/ManageBlog">
        <div className="MAcard">
          <img src={logo1}></img>
          <h1>States Update</h1>
        </div>
      </Link>

      <Link to="/ManageAccount">
        <div className="MAcard">
          <img src={logo1}></img>
          <h1>Manage Account</h1>
        </div>
      </Link>
    </div>
  );
};

export default ManageAccount;
