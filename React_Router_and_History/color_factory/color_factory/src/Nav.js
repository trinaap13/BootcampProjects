import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{backgroundColor: 'gray'}}>
        <h2>Welcome to the color factory.</h2>
    <ul>
      <p style={{fontSize: 50, color: '#FFF'}}><Link to="/colors/new">Add a color</Link></p>
    </ul>
    </nav>
  );
}

export default Nav;