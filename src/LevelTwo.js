import React from "react";
import "./LevelTwo.css";

function LevelTwo() {
  return (
    <div className="twoContainer">
      <div className="twoLeft">
        <img
          src={process.env.PUBLIC_URL + "/images/twoLeft.png"}
          alt="Wrist Watch"
        />
      </div>
      <div className="twoMiddle">
        <img
          src={process.env.PUBLIC_URL + "/images/twoMiddle.png"}
          alt="Watch1"
        />
      </div>
      <div className="twoRight">
        <img
          src={process.env.PUBLIC_URL + "/images/twoRight.png"}
          alt="Watch2"
        />
      </div>
    </div>
  );
}

export default LevelTwo;
