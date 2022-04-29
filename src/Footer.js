import React from "react";
import "./Footer.css";

function footer() {
  return (
    <div className="footerWrapper">
      <div className="footerMenuWrapper">
        <div className="footabout">About</div>
        <div className="footCareers">Careers</div>
        <div className="footFaq">FAQ's</div>
        <div className="footPrivacy">Privacy</div>
        <div className="footTerms">Terms of Service</div>
      </div>
      <div className="footerImageWrapper">
        <a href="https://www.facebook.com">
          <img
            className="fbLogo"
            src={process.env.PUBLIC_URL + "/images/facebook.png"}
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            className="twitterLogo"
            src={process.env.PUBLIC_URL + "/images/twitter.png"}
            alt="Twitter Logo"
          />
        </a>
        <a href="https://www.linkedin.com">
          <img
            className="linkedLogo"
            src={process.env.PUBLIC_URL + "/images/linkedin.png"}
            alt="LinkedIn Logo"
          />
        </a>
        <a href="https://www.youtube.com">
          <img
            className="youtubeLogo"
            src={process.env.PUBLIC_URL + "/images/youtube.png"}
            alt="Youtube Logo"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            className="instagramLogo"
            src={process.env.PUBLIC_URL + "/images/instagram.png"}
            alt="Instagram Logo"
          />
        </a>
      </div>
      <span>
        <br />
        Copyright © 2021 Timely Watches All rights reserved
      </span>
    </div>
  );
}

export default footer;
