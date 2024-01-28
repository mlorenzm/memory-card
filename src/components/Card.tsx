export default function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif" //SRC
          alt="Pokemon"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{/* Name */}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{/* type */}</div>
        </div>
      </div>
    </div>
  );
}
