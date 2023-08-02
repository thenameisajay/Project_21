import React, { useState, useEffect } from "react";
import Arrow from "../components/Arrow/Arrow";
import Header from "../components/Headers/Header2";
import InputArea from "../components/InputArea/InputArea";
import Timer from "../components/Timer/Timer";

function Play() {
  const [arrowData, setArrowData] = useState(null);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (attempt = 1) => {
    try {
      const response = await fetch(
        "/api/check"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setArrowData(data);
      setFetchSuccess(true);
    } catch (err) {
      if (attempt < 5) {
        setTimeout(() => fetchData(attempt + 1), attempt * 2000); // wait for 2 seconds times the attempt number
      } else {
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (fetchSuccess) {
    return (
      <div className="in-container">
        <Header />
        <Timer />
        <div className="play-container">
          <InputArea setArrowData={setArrowData} />
          <Arrow data={arrowData} />
        </div>
      </div>
    );
  } else {
    return (
      <p className="error-message">
        <span
          role="img"
          aria-labelledby="mechanic-description"
          style={{ justifyContent: "center" }}
        >
          👨‍🔧
        </span>{" "}
        Game Loading...Please Wait a second.
      </p>
    );
  }
}

export default Play;
