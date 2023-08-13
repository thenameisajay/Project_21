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
            Scoring Details?{" "}
              <span role="img" aria-label="Time">
                ⌛
              </span>{" "}
            </MDBCardTitle>
            <MDBCardText className="custom-card-text">
            <p> <strong>Time of Day Bonus:</strong>
            <ul>
              <li>The game starts every day at midnight (00:00).</li>
              <li>The earlier you guess the pin in the day, the higher your bonus! For example, if you guess it at 1:00 AM, you get a bigger bonus than if you guess at 11:00 PM.</li>
            </ul>
            <strong>{" "}
                Number of Tries{" "}
                <span role="img" aria-label="emergency">
                  🚨
                </span>{" "}</strong>
            <ul>
              <li>The fewer tries you take to guess the pin, the better.</li>
              <li>For every 10 additional tries, you'll lose some points. So, keep guessing smartly!</li>
            </ul>
            <strong> {" "}
                Time Taken{" "}
                <span role="img" aria-label="bomb">
                  💣
                </span>{" "} Bonus:</strong>
 <ul>
 <li>The faster you guess, the more points you get.</li>
              <li>If you take more than 30 seconds to guess, your points for this part will begin to decrease.</li>
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
