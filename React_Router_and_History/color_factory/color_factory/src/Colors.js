import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {

    return (
        <div style={{ alignItems: "center" }}>

            <p>Please select a color:</p>
            <ul>
                {colors.map(color => (
                    <li key={color}>
                        <Link to={`/colors/${color}`}>{color}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Colors;