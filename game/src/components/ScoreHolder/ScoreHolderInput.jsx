import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScoreHolderInput({ score, tries }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  function handleInput(event) {
    setUserName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      "https://project-21-lh2i.onrender.com/api/push",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: userName,
          numberOfTries: tries,
          score: score
        })
      }
    );

    if (response.ok) {
      navigate("/scoreboard");
    } else {
     
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
              <p className="score-show"> Your score is: {score}</p>
              <button className="button-19 scoreholder" onClick={handleSubmit}>
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
