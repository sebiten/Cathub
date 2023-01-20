import Image from "next/image";
import Link from "next/link";
import React from "react";
import useDogs from "../hooks/useDogs";
function Search() {
  const { results, searched } = useDogs();
  return (
    <div>
      {searched && (
        <div>
          {results.map((result) => (
            <div key={result.id}>
              <Link
              href={`/breed/${result.name}`}>
                <div className="bg-white rounded-lg shadow-lg p-4 m-4 select-none hover:scale-105 w-1/2 mx-auto">
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
  );
}

export default Search;
