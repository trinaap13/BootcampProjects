import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/candy">
        Candy
      </NavLink>
      <NavLink exact to="/water">
        Water
      </NavLink>
      <NavLink exact to="/parfait">
        Parfait
      </NavLink>
    </nav>
  );
}

export default NavBar;