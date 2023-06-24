import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({dogs}) {
    const { name } = useParams();

    return (
        <div>
            <h1>All about {name}!</h1>
            {console.log(dogs.map(a => a.name))}
        </div>

    )
}

export default DogDetails;