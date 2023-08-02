import React, { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Convert counter to HH:MM:SS
  const seconds = counter % 60;
  const minutes = Math.floor(counter / 60) % 60;
  const hours = Math.floor(counter / 3600);

  // Pad numbers with leading zeros
  const formatNumber = (num) => String(num).padStart(2, "0");

  const timeDisplay = `${formatNumber(hours)}:${formatNumber(
    minutes
  )}:${formatNumber(seconds)}`;

  return (
    <>
      <div className="timer">
        <h4>Time </h4>
        <h4>{timeDisplay}</h4>
      </div>
    </>
  );
}

export default Timer;
