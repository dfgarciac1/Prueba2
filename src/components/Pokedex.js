import React from "react";
import Pokemon from "./Pokemon";
import PokemonImage from "./PokemonImage";
import "../styles/index.scss";

const Pokedex = (props) => {
  const { pokemons } = props;
  

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <div className="Pokedex">

  
          <div className="pokedex-grid">
            {pokemons.map((pokemon, idx) => {
             return <PokemonImage pokemon={PokemonImage} key={pokemon.name} />;
            })}
          </div>


          <div className="info-Pokemon">
            <div className="info-header">
              {pokemons.map((pokemon, idx) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name} />;
              })}
            </div>
          
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
