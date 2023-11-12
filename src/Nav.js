import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginLeft: "auto" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/krabbyPatty">Krabby Patty</Link>
        </li>
        <li>
          <Link to="/kombucha">Kombucha</Link>
        </li>
        <li>
          <Link to="/skittles">Skittles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
