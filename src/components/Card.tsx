import { PokemonTypes } from "../types";
interface PokemonCardPropTypes extends PokemonTypes {
  handlePokemonClick?: () => void;
}
const Card = (props: PokemonCardPropTypes) => {
  return (
    <div
      className=" p-2 rounded-lg w-48 bg-base-100 hover:border-2 border-primary cursor-pointer flex flex-col"
      onClick={() => {
        console.log(props.name);
      }}
    >
      <img
        className="self-center"
        src={props.sprite} //SRC
        alt={props.name}
        width={"120px"}
      />
      <div>
        <h2 className="card-title">
          {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </h2>
      </div>
    </div>
  );
};

export default Card;
