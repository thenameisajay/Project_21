import React from "react";
import UpArrow from "./UpArrow"; // Import UpArrow component
import DownArrow from "./DownArrow"; // Import DownArrow component

function Arrow({ data }) {

  if (data === -1) {
    return (
      <div className="arrow-container">
        <UpArrow />
      </div>
    );
  } else if (data === 1) {
    return (
      <div className="arrow-container">
        <DownArrow />
      </div>
    );
  } else {
    return null; // Return null if data is 0
  }
}

export default Arrow;
