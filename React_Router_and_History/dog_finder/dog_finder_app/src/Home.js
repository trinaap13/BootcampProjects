import React from "react";
import DogList from "./DogList";
import Nav from './Nav';

function Home({dogs}) {
    return (
        <>
        <h1>Welcome!</h1>
        <h3>List of dogs:</h3>

        <ul>
            <DogList dogs={dogs}/>
        </ul>
        </>
    )
}

export default Home;