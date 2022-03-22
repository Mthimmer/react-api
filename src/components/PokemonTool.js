import { useState, useEffect } from "react";
import axios from "axios";

function PokemonTool() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((Response) => {
        //console.log(Response);
        console.log(`I got a request for ${pokemonName}`);
        // set pokemon
        setPokemon({
          name: Response.data.name,
          species: Response.data.species.name,
          img: Response.data.sprites.front_default,
        });

        setPokemonChosen(true);
      });
  };
  // wait after rendering to consolelog the selected pokemon information, otherwise it consolelogs before the chosen pokemon.
  useEffect(() => {
    if (setPokemon.length) {
      console.log(pokemon);
    }
  }, [pokemon]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  // JSX
  return (
    <div className="tool">
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h2>Choose name</h2>
        ) : (
          <>
            <h2>{pokemon.name}</h2>
            <img
              src={pokemon.img}
              alt={pokemon.name}
              width="10%"
              height="auto"
            />
            <h3>Species: {pokemon.species}</h3>
          </>
        )}
      </div>

      <div>
        <input
          className="selectPokemon"
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchPokemon(e.target.value);
            }
          }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </div>
  );
}

export default PokemonTool;
