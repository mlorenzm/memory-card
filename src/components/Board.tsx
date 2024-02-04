import { PokemonTypes } from "../types";
import Card from "./Card";
import { useState } from "react";
type Props = {
  pokemon: PokemonTypes[];
};

const Container = (props: Props) => {
  const { pokemon } = props;
  const [score, setScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState<string[]>([]);

  const handlePokemonClick = (index: number) => () => {
    const currentPokemon = pokemon[index].name;
    if (!clickedPokemons.includes(currentPokemon)) {
      setClickedPokemons([...clickedPokemons, currentPokemon]);
      setScore(score + 1);
      console.log(clickedPokemons);
      // Shuffle the array
    } else {
      setScore(0);
      setClickedPokemons([]);
    }
    // Gamelogic fn
  };
  return (
    <main className="grid items-center h-screen w-screen">
      <h1 className="bold text-3xl">Score: {score}</h1>
      <ul className="grid grid-rows-3 grid-cols-2 gap-2">
        {pokemon.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            sprite={pokemon.sprite}
            onClick={handlePokemonClick(index)}
          />
        ))}
      </ul>
    </main>
  );
};

export default Container;
