import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <Link to="/play">
              {" "}
              <button className="button-19">Play</button>
            </Link>
            <Link to="/">
              {" "}
              <button className="button-19">Home</button>
            </Link>
            <Link to="/scoreboard">
              {" "}
              <button className="button-19">Scoreboard</button>
            </Link>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
