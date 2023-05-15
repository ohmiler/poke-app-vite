import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import FavPoke from "./components/FavPoke";
import PokeInfo from "./components/PokeInfo";

function App() {
  const [set, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [poke, setPoke] = useState(null);
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${number}`,
          {
            signal: abortController.signal,
          }
        );
        console.log(response.data);
        setPoke(() => response.data);
        setError("");
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadPoke();

    return () => abortController.abort();
  }, [number]);

  const prevPoke = () => {
    setNumber((number) => number - 1);
  };

  const nextPoke = () => {
    setNumber((number) => number + 1);
  };

  const addFav = () => {
    setFav((oldState) => [...oldState, poke]);
  };

  console.log(fav);

  return (
    <div
      className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 poke-card"
      style={{ textAlign: "center" }}
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* left box */}
        <div>
          {loading ? (
            <ClipLoader />
          ) : (
            <>
              {/* <h1>{poke?.name}</h1>
            <button onClick={addFav}>Add to favourite</button>
            <div>
              <img src={poke?.sprites?.other.home.front_default} alt={poke?.name} />
              <ul>
                {poke?.abilities?.map((val, idx) => (
                  <li key={idx}>{val.ability.name}</li>
                ))}
              </ul>
              <button onClick={prevPoke}>Previous</button>
              <button onClick={nextPrev}>Next</button>
            </div> */}
              <PokeInfo
                poke={poke}
                prevPoke={prevPoke}
                nextPoke={nextPoke}
                addFav={addFav}
              />
            </>
          )}
        </div>
        {/* Right Box */}
        <div>
          <h3 className="font-bold">Favourite Pokemon</h3>
          {/* FavPoke Components */}
          {fav.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p>No favourite pokemon...</p>
            </div>
          ) : (
            <>
              <FavPoke fav={fav} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
