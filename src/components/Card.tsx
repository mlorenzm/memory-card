import { PokemonTypes } from "../types";

const Card = (props: PokemonTypes) => {
  return (
    <div className="rounded-lg w-48 bg-base-100 hover:border-2 hover:border-primary cursor-pointer shadow-xl flex flex-col">
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
