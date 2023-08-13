import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScoreHolderInput({ score, tries, time }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null); // To show error messages

  function handleInput(event) {
    setUserName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
    const endpoint = `${API_URL}/api/push`;
console.log(typeof time);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: userName,
          numberOfTries: tries,
          timeTaken: time,
          score: score,
        })
      });

      if (response.ok) {
        navigate("/scoreboard");
      } else {
        const errData = await response.json();
        setError(errData.message || "Failed to submit score.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  }

  return (
    <>
      <div className="form-container scoreholder">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h2>
                Congrats! You found the password of the Day!
                <span role="img" aria-label="celebration">
                  🎉
                </span>
              </h2>
              <input
                type="text"
                className="form-control userName"
                placeholder="Enter a username"
                value={userName}
                onChange={handleInput}
                maxLength={11}
              />
              <p className="score-show">Your score is: {score}</p>
              {error && <p className="error-message">{error}</p>}
              <button className="button-19 scoreholder" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ScoreHolderInput;
