import React, { useEffect } from "react";
import Header from "../components/Headers/Header1";
import Instructions from "../components/Instructions";

function How() {
  useEffect(() => {
    fetch("/api/check")
      .then((response) => response.json())
      .then((data) => {
        // Here you can handle the data that is returned from the server
        
      })
      .catch((error) => {
        // Here you can handle errors
        console.error("Error:", error);
      });
  }, []); // The empty array means that this useEffect will run once, when the component mounts.

  return (
    <>
      <div className="in-container">
        <Header />
        <Instructions />
      </div>
    </>
  );
}

export default How;
