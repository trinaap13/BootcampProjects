import React from "react";

function DogList({ dogs }) {
    return (
        <ul>
            { dogs.map(d => <li key={d.name}>{d.name}</li>) }
        </ul>
    )
}

export default DogList;