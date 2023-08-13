import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isDataValid, setIsDataValid] = useState(false);

  useEffect(() => {
    
      const endpoint = `${process.env.BASE_URL}/api/check`;
       fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setIsDataValid(data);
        setIsLoaded(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoaded(false);
      });
  }, []);

  if (isLoaded) {
    return (
      <>
        <div className="button-container">
          <Link to="/how_to_play">
            <button className="button-19">How to Play?</button>
          </Link>
          <Link to="scoreboard">
            <button className="button-19">Scoreboard</button>
          </Link>
        </div>
        <div className="button-container">
          <Link to="/play">
            <button className="button-19" id="play-button">
              Play
            </button>
          </Link>
        </div>
        <div className="creator-container">
          <p className="text-center text-body-secondary creator">
            Made with{" "}
            <span role="img" aria-label="Heart">
              🖤
            </span>{" "}
            by <a href="https://twitter.com/kn_frty">Furkan T.</a> &{" "}
            <a href="https://github.com/thenameisajay">
              Ajay Pradeep Mahadeven
            </a>
          </p>
        </div>
      </>
    );
  } else if (!isLoaded) {
    return (
      <>
        {" "}
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
      </>
    );
  }

  if (!isDataValid) {
    return (
      <div>
        <p className="error-message">
          {" "}
          <span role="img" aria-labelledby="mechanic-description">
            👨‍🔧
          </span>{" "}
          If you can see me, refresh the page and I'll fix it for you.
        </p>
      </div>
    );
  }
}

export default Home;
