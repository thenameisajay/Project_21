import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScoreHolderInput({ score, tries, time }) {

  // Parse the score string as a number to use toLocaleString
  const formattedScore = parseFloat(score).toLocaleString();

  function secondsToHMS(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = '';
    if (hours > 0) {
      result += `${hours}hr`;
    }
    if (minutes > 0 || (hours > 0 && seconds > 0)) {
      result += `${minutes}min `;
    }
    if (seconds > 0 || result === '') {
      result += `${seconds}secs`;
    }
    return result.trim();
  }




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
            <h2 style={{ textAlign: 'center', fontSize: '3rem' , marginTop: '-40px'}}>
                Congrats!<br />
              </h2>

              <h2 style={{ textAlign: 'center', fontSize: '1.75rem', color:'black' }}>You found the password of the Day!
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
                required
              />
              <div className="score-show">
                Your score is: <br />
                <strong style={{ fontSize: '3.5em' }}>{formattedScore}</strong> <br />
                time taken to solve was: <br /> <strong style={{ fontSize: '1.75em' }}>{secondsToHMS(time)}</strong>
              </div>
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
