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
              Introduction{" "}
              <span role="img" aria-label="Time">
                💡
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              You have the chance to test your intuition and guessing skills to
              find the secret number. Not only is it a fun and exciting
              challenge, but you also get to compete with other players to see
              who can achieve the highest score on the Leaderboard.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
