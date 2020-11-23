import React from "react";

// Project library
import SocialBar from "./SocialBar";
import { ReactComponent as DownloadLogo } from "../media/logo-download.svg";

function Home(props) {
  return (
    <div className="page-section" id="home">
      <div id="about-card">
        <div id="social-me">
          <img id="prof-img-box" src="media/male-profile-picture.png" alt="profile-img" />
          <div id="my-profile">
            <p className="heading2">{props.profileName}</p>
            <p className="heading3">PhD Candidate</p>
            <SocialBar />
          </div>
        </div>
        <div id="about-me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <div id="download-cv">
            <DownloadLogo />
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
