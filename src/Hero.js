import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="container">
      <div className="logoRow">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="Logo"
        />
        <div className="timely">Timely</div>
        <ul className="oneMenu">
          <li id="menuContact">Contact Us</li>
          <li id="menuAbout">About Us</li>
          <li id="menuProduct">Products</li>
        </ul>
      </div>
      <div className="textWrapper">
        <div className="largeText">Lorem ipsum dolor sit amet</div>
        <div className="mediumText">Lorem ipsum dolor sit elit</div>
        <div className="normalText">Lorem ipsum dolor sit amet elit</div>
        <button className="videoButton"> Watch Video</button>
        <button className="productsButton"> Products</button>
      </div>
    </div>
  );
}

export default Hero;
