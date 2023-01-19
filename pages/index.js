import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FavoriteImage from "../components/FavBreed";
import Navbar from "../components/Navbar";
import SectionBreeds from "../components/SectionBreeds";

export default function Home() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    async function fetchBreeds() {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${search}`
      );
      const data = await res.json();
      setResults(data);
      console.log(data);
    }
    setSearched(false);
    fetchBreeds();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearched(true);
  };

  return (
    <div>
      <div>
        <Navbar />
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="search"
            id="search"
            className="border bg-slate-200 border-gray-400 rounded w-full p-2"
            placeholder="Search your favorite breed"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-200 hover:bg-slate-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        {searched && (
          <div>
            {results.map((result) => (
              <div key={result.id}>
                <Link href={`/breed/${result.name}`}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src={`https://cdn2.thedogapi.com/images/${result.reference_image_id}.jpg`}
                        alt={result.name}
                        width={300}
                        height={300}
                      />

                      <h2 className="text-2xl font-bold my-4">{result.name}</h2>
                      <p className="text-gray-500">{result.temperament}</p>
                      <p className="text-gray-500">{result.origin}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {searched && <SectionBreeds />}
      
    </div>
  );
}
