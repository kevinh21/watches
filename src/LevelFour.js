import React from "react";
import "./LevelFour.css";

function LevelFour() {
  return (
    <div className="fourContainer">
      <div className="fourImage">
        <img
          src={process.env.PUBLIC_URL + "/images/four.png"}
          alt="Suit Watch"
        />
      </div>
      <div className="fourText">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu vitae
        augue etiam.”
      </div>
    </div>
  );
}
export default LevelFour;
