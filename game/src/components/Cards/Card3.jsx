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
            Winning the Game{" "}
              <span role="img" aria-label="Time">
              🏆
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
    <p>
      <ul>
      <li>Your score is the sum of the three parts above, and the highest possible score is 1,000,000.</li>
      <li>Each day brings a new pin and a new challenge. So, come back every day to see how well you can do!</li>
      </ul>
      </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
