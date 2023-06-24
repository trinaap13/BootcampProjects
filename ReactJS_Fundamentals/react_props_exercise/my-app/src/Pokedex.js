import React from "react";
import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {
    return (
        <div className="Pokedex">

            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>

        </div>
    );
}

export default Pokedex;