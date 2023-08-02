import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <Link to="/scoreboard">
              {" "}
              <button className="button-19">Board</button>
            </Link>
            <Link to="/">
              {" "}
              <button className="button-19">Home</button>
            </Link>

            <Link to="/how_to_play">
              {" "}
              <button className="button-19">How ?</button>
            </Link>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
