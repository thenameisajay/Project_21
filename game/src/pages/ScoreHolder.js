import React from "react";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import Header from "../components/Headers/Header2";
import ScoreCalForm from "../components/ScoreHolder/ScoreCalForm";

function Scoreholder() {
  const location = useLocation(); // Get the current location object
   // Safely access the tries and time properties from state
   const tries = location.state?.tries; 
   const time = location.state?.time; 


  if (tries === undefined || tries === null || tries === 0) {
    return (
      <>
        <h1>Error 404! Oops Looks like you broke our site.</h1>
      </>
    );
  } else {
    return (
      <>
        <Header />
         {/* Passing both tries and time to ScoreCalForm */}
         <ScoreCalForm tries={tries} time={time} />
      </>
    );
  }
}

export default Scoreholder;
