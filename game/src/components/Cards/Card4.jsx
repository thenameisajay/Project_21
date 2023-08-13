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
              Tips{" "}
              <span role="img" aria-label="Timer">
                ⏲️
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              <p>
                <ul>
                  <li> The <strong> ARROWS </strong> indicate whether you have to guess higher or lower</li>
                  <li>Start early in the day to get the biggest time of day bonus.</li>
                  <li>Try to guess quickly but also carefully. You want a balance of speed and accuracy.</li>
                  <li>Remember, every 10 wrong guesses will reduce your score a bit. So, think before you guess!</li>
                </ul>
                <strong>Good luck, and have fun guessing the pin!</strong>
              </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
