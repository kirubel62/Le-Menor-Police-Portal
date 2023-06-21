import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
//
import NewsSection from "./NewsSection/UNewsSection";
import StorySection from "./StorySectio/StorySection";
//logos
import logo1 from "./images/logo/logo1.png";
import logo2 from "./images/logo/logo2.png";

//
const Blog = () => {
  return (
    <>
      <div className="BlogMaster">
        <div className="Bloggrid-container">
          <Link to="/UNewsSection">
            <div class="grid-item">
              <h1 className="Title">News</h1>
              <img className="logo" src={logo1} alt="Logo"></img>
            </div>
          </Link>

          <Link to="/UStorySection">
            <div class="grid-item">
              <h1 className="Title">Stories</h1>
              <img className="logo" src={logo2} alt="Logo"></img>
            </div>
          </Link>

          <div className="grid-item">
            <h1 className="Title">Advocacy and Activism</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Mental Health and Wellbeing</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Education and Employment</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Culture and Identity</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Humanitarian Aid</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Legal Assistance</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Resettlement</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Community Engagement</h1>
          </div>

          <div className="grid-item">
            <h1 className="Title">Resilience and Hope</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
