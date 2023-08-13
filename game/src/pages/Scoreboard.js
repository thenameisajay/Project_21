import React, { useState, useEffect } from "react";
import Header from "../components/Headers/Header3";
import Table from "../components/Tables/Table";

function Scoreboard() {
     // Retrieve the API URL from the environment variable, or default to 'http://localhost:3000'
     const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
     
  
  useEffect(() => {
    // Use the API_URL to construct the endpoint
    const endpoint = `${API_URL}/api/check`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [time, setTime] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const calculateTime = () => {
      const endpoint  = `${API_URL}/api/getdate2`;
      console.log(endpoint);
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          let now = new Date(data); // Create a Date object from the returned string
          let midnight = new Date(now);
          midnight.setHours(24, 0, 0, 0); // Set the time to next midnight
          let diff = midnight - now; // Get the difference in milliseconds
          let diffHours = Math.floor(diff / (1000 * 60 * 60));
          let diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          let diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTime(`${diffHours}:${diffMinutes}:${diffSeconds}`);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    // Call calculateTime once immediately, then again every second
    calculateTime();
    const intervalId = setInterval(calculateTime, 1000);

    // Clear interval on cleanup
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch("/api/today")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error)
    return (
      <div>
        <h1 className="mb-3 custom-heading" style={{ textAlign: "center" }}>
          No Score for the Day
        </h1>
      </div>
    );
  if (!data)
    return (
      <h1 className="mb-3 custom-heading" style={{ textAlign: "center" }}>
        Loading...
      </h1>
    );

  return (
    <div className="in-container">
      <Header />
      <h1 className="mb-3 custom-heading" style={{ textAlign: "center" }}>
        ScoreBoard
      </h1>

      <h2 className="timer"> Time until reset is {time}</h2>
      {data.leaderboard.length === 0 ? (
        <h1 className="mb-3 custom-heading" style={{ textAlign: "center" }}>
          No Score for the Day
        </h1>
      ) : (
        <Table data={data.leaderboard} />
      )}
    </div>
  );
}

export default Scoreboard;
