import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills d-flex justify-content-center">
            <li>
              <Link to="/play">
                <button className="button-19">Play</button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button className="button-19">Home</button>
              </Link>
            </li>
            <li>
              <Link to="/how_to_play">
                <button className="button-19">How?</button>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
