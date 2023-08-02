import React from "react";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import Header from "../components/Headers/Header2";
import ScoreCalForm from "../components/ScoreHolder/ScoreCalForm";

function Scoreholder() {
  const location = useLocation(); // Get the current location object
  const tries = location.state?.tries; // Safely access the tries property from state


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
        <ScoreCalForm tries={tries} />
      </>
    );
  }
}

export default Scoreholder;
