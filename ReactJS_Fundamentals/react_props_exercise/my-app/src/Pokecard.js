import React from "react";

const POKEMON_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ exp, id, name, type }) {
    const image = `${POKEMON_API}${id}.png`;

    return (
        <div className="Pokecard">
            <div> { name } </div>
            <img src={ image } alt={ name } />
            <div> Type: { type } </div>
            <div> EXP: { exp } </div>
        </div>
    );
}

export default Pokecard;