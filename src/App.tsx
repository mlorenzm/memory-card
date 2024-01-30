import { useState, useEffect } from "react";
import { PokemonTypes } from "./types";
import Card from "./components/Card";
export default function App() {
  const [pokemon, setPokemon] = useState<PokemonTypes[]>([]);
  useEffect(() => {
    const pokemonNames = [
      "gardevoir",
      "scizor",
      "espeon",
      "articuno",
      "luxray",
      "blaziken",
      "tyranitar",
      "volcarona",
    ];
    const fetchAllPokemon = async () => {
      const promises = pokemonNames.map((pokemon: string) =>
        fetchPokemon(pokemon)
      );
      const pokemonData = await Promise.all(promises);
      setPokemon(pokemonData);
    };

    fetchAllPokemon();
  }, []);

  const fetchPokemon = async (poke: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const data = await response.json();
    const formattedPokemon: PokemonTypes = {
      name: data.name,
      sprite: data.sprites.front_default,
    };

    return formattedPokemon;
  };
  return (
    <div>
      <ul>
        {pokemon.map((pokemon) => (
          <Card {...pokemon} />
        ))}
      </ul>
    </div>
  );
}
