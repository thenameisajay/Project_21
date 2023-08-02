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
              Why is Time a Factor?{" "}
              <span role="img" aria-label="Time">
                ⌛
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              We believe that quick thinking and sharp instincts deserve to be
              rewarded! By incorporating the time element, we encourage players
              to make accurate guesses swiftly and efficiently. This adds an
              extra layer of excitement to the game and emphasizes the
              importance of making confident choices.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
