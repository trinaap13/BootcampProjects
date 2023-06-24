import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <nav className="Nav">
            { dogs.map(d => <Link to={`/dogs/${d.name}`}>{d.name}</Link>) }
        </nav>
    )
}

export default Nav;