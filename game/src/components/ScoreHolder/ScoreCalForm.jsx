import React, { useState, useEffect } from "react";
import ScoreHolderInput from "./ScoreHolderInput";

function ScoreCalForm({ tries, time }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Retrieve the API URL from the environment variable, or default to 'http://localhost:3000'
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
    const fetchScore = async () => {
      const endpoint = `${API_URL}/api/score`;
      const response = await fetch(
        endpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ numberOfTries: tries, timeTaken: time })
        }
      );

      if (response.ok) {
        const scoreData = await response.json();
        
        setScore(scoreData);
      } else {
        console.error("Failed to fetch score");
      }
    };

    fetchScore();
  }, [tries, time]);

  return (
    <>
      <ScoreHolderInput score={score} tries={tries} time={time} />
    </>
  );
}

export default ScoreCalForm;
