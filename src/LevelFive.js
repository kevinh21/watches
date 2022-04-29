import React from "react";
import "./LevelFive.css";

function LevelFive(props) {
  return (
    <div className="fiveContainer">
      <div className="fiveText">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu vitae
        augue etiam.”
        <div className="first">~First Last</div>
      </div>
      <div className="fiveImage">
        <img
          src={process.env.PUBLIC_URL + "/images/five.png"}
          alt="Suit Watch"
        />
      </div>
    </div>
  );
}
export default LevelFive;
