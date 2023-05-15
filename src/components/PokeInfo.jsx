import React from "react";

function PokeInfo({ poke, prevPoke, nextPoke, addFav }) {
  return (
    <>
      <h1 title="pokename">{poke?.name}</h1>
      <button onClick={addFav}>Add to favourite</button>
      <div>
        <img src={poke?.sprites?.other.home.front_default} alt={poke?.name} />
        <ul>
          {poke?.abilities?.map((val, idx) => (
            <li key={idx}>{val.ability.name}</li>
          ))}
        </ul>
        <button onClick={prevPoke}>Previous</button>
        <button onClick={nextPoke}>Next</button>
      </div>
    </>
  );
}

export default PokeInfo;
