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
      if (score == pokemon.length - 1) {
        console.log("You won!");
        // some modal to reset game
        resetGame();
      }
      shuffleArray(pokemon);
    } else {
      console.log("You lost! Try again?");
      resetGame();
    }
  };

  const resetGame = () => {
    setScore(0);
    setClickedPokemons([]);
  };

  const shuffleArray = (array: PokemonTypes[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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
