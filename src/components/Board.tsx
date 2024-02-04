import { PokemonTypes } from "../types";
import Card from "./Card";
type Props = {
  pokemon: PokemonTypes[];
};

const Container = (props: Props) => {
  const { pokemon } = props;
  const handlePokemonClick = () => {
    console.log(pokemon);
    // Gamelogic fn
    // Shuffle the array
  };
  return (
    <main className="grid items-center h-screen w-screen">
      <ul className="grid grid-rows-3 grid-cols-2 gap-2">
        {pokemon.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            sprite={pokemon.sprite}
            onClick={handlePokemonClick}
          />
        ))}
      </ul>
    </main>
  );
};

export default Container;
