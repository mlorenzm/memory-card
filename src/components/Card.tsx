import { PokemonTypes } from "../types";
interface PokemonCardPropTypes extends PokemonTypes {
  onClick?: () => void;
}
const Card = ({ name, sprite, onClick }: PokemonCardPropTypes) => {
  return (
    <div
      className=" p-2 rounded-lg w-48 bg-base-100 hover:border-2 border-primary cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <img
        className="self-center"
        src={sprite} //SRC
        alt={name}
        width={"120px"}
      />
      <div>
        <h2 className="card-title">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
    </div>
  );
};

export default Card;
