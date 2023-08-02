import React, { useState, useEffect } from "react";
import ScoreHolderInput from "./ScoreHolderInput";

function ScoreCalForm({ tries }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      const response = await fetch(
        "/api/score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ numberOfTries: tries })
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
  }, [tries]);

  return (
    <>
      <ScoreHolderInput score={score} tries={tries} />
    </>
  );
}

export default ScoreCalForm;
