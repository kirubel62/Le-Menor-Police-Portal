import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
//
import { SocialIcon } from "react-social-icons";
import { animated, useSpring } from "@react-spring/web";

function Footer() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <>
      <div className="masterF">
        <animated.div style={props}>
          <div className="main">
            <div className="left">
              <h1>Le Menor</h1>
              <pre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br></br>
                sed do eiusmod tempor incididunt ut labore et dolore <br></br>
                magna aliqua. Ut enim ad minim veniam
              </pre>

              <h1>LeMenor@example.com</h1>
            </div>

            <div className="middle">
              <div className="m1">
                <SocialIcon
                  className="socialmedialink"
                  url="https://facebook.com/"
                />
                <SocialIcon
                  className="socialmedialink"
                  url="https://telegram.com/"
                />
                <SocialIcon
                  className="socialmedialink"
                  url="https://github.com/"
                />
                <SocialIcon
                  className="socialmedialink"
                  url="https://gmail.com/"
                />
                <SocialIcon
                  className="socialmedialink"
                  url="https://tiktok.com/"
                />
                <SocialIcon
                  className="socialmedialink"
                  url="https://youtube.com/"
                />
              </div>
              <div>
                <h1>2023 All Right Recived</h1>
              </div>
            </div>

            <div className="right">
              <h1>Quick Links</h1>
              <Link to="/Home">
                <h3>Home</h3>
              </Link>
              <Link to="/Services">
                <h3>Services</h3>
              </Link>
              <Link to="/Volunter">
                <h3>Volunters</h3>
              </Link>
              <Link to="/Blog">
                <h3>Blogs</h3>
              </Link>
              <Link to="/Contact">
                <h3>Contact</h3>
              </Link>
              <Link to="/Donation">
                <h3>Donation</h3>
              </Link>
              <Link to="/About">
                <h3>About</h3>
              </Link>
            </div>

            <div className="right">
              <Link to="/PrivacyPolicy">
                <h1>Privacy Policy</h1>
              </Link>
              <Link to="/TermsOfUse">
                <h1>Terms of Use</h1>
              </Link>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
}

export default Footer;
