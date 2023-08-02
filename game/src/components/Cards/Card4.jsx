import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdb-react-ui-kit";

function Card() {
  return (
    <>
      <div className="custom-card-container">
        <MDBCard className="custom-card">
          <MDBCardBody>
            <MDBCardTitle className="custom-card-title">
              How the Time Component Affects Your Score{" "}
              <span role="img" aria-label="Timer">
                ⏲️
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              The scoring formula is designed to balance the importance of both
              factors - number of tries and time passed since the scoreboard is
              reset (00:00). Here's how it works.
              <ul>
                <li>
                  If you find the number in less than 10 tries, your score will
                  be 1000000 points minus the number of seconds it took you to
                  guess (1000000 / 86400) for each second.
                </li>
                <li>
                  If your attempts are between 10 and 49, your score will be 90%
                  of the above value.
                </li>
                <li>
                  If it takes you 50 or more tries, your score will be 80% of
                  the value obtained in the first case.
                </li>
              </ul>
              Remember, the leaderboard is updated daily, so you have a fresh
              chance to make it to the top every day!
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
