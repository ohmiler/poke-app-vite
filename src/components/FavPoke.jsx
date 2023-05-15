import React, { useState } from "react";
import LikePoke from "./LikePoke";

function FavPoke({ fav }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {fav?.map((val, idx) => (
        <div>
          <p>{val.name}</p>
          <img src={val.sprites?.other.home.front_default} alt="" />
          <LikePoke />
        </div>
      ))}
    </div>
  );
}

export default FavPoke;
