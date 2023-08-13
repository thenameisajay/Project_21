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
              Objective{" "}
              <span role="img" aria-label="Time">
                💡
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
              <p>
                Your goal is to <strong> GUESS </strong> a special <strong>4-digit pin </strong> every day.

              </p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Card;
