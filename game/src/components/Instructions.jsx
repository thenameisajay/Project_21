import React from "react-dom";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

function Instructions() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100 direction-row">
        <div className="text-white">
          <h1 className="mb-3 custom-heading">
            How to Play{" "}
            <span role="img" aria-label="game">
              🎮
            </span>{" "} <br/>
            PUZZLO
          </h1>
        </div>
      </div>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </>
  );
}

export default Instructions;
