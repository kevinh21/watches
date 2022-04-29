import React from "react";
import "./LevelThree.css";

function LevelThree() {
  return (
    <div className="threeContainer">
      <div className="threeText">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu vitae
        augue etiam.”
        <div className="first">~First Last</div>
      </div>
      <div className="threeImage">
        <img
          src={process.env.PUBLIC_URL + "/images/three.png"}
          alt="Suit Watch"
        />
      </div>{" "}
    </div>
  );
}

export default LevelThree;
