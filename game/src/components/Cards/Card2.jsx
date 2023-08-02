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
              How is the Score Calculated?{" "}
              <span role="img" aria-label="Time">
                ⌛
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              Your score is calculated based on two factors: the number of
              attempts you make to guess the correct number and the time you
              take to crack the code. The quicker you guess with fewer attempts,
              the higher your score will be!
              <ul>
                <li>
                  If you enter a number and see the "UP" arrow it means the
                  entered number is lower than the password.{" "}
                </li>
                <li>
                  {" "}
                  If you enter a number and see the "DOWN" arrow it means the
                  entered number is higher than the password.{" "}
                </li>
              </ul>
              <h4>
                {" "}
                Number of Tries{" "}
                <span role="img" aria-label="emergency">
                  🚨
                </span>{" "}
              </h4>
              <ul>
                <li>
                  If you manage to guess the number in less than 10 tries,
                  you'll be rewarded with a higher score.{" "}
                </li>
                <li>
                  {" "}
                  If it takes you between 10 and 49 tries, you'll still get a
                  good score, but it will be slightly lower.
                </li>
                <li>
                  For 50 or more tries, the score will be lower than the above
                  cases.
                </li>
              </ul>
              <h4>
                {" "}
                Time Taken{" "}
                <span role="img" aria-label="bomb">
                  💣
                </span>{" "}
              </h4>
              <ul>
                <li>
                  {" "}
                  The game is exciting, but we also value your time. The quicker
                  you find the correct number, the more points you'll earn.
                </li>
                <li>
                  We measure the time from the start of the day (00:00:00) until
                  you successfully guess the number.
                </li>
              </ul>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
