import Image from "next/image";
import Link from "next/link";
import React from "react";
import useDogs from "../hooks/useDogs";
import FavoriteImage from "./FavBreed";
import Navbar from "./Navbar";

function SectionBreeds() {
  const { dogs, text } = useDogs();
  return (
    <div>
      <section
        className="grid user-select-none "
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {dogs.map((dog) => (
          <Link href={`/breed/${dog.name}`} key={dog.id} className="bg-white rounded-lg shadow-lg p-4 m-4 select-none hover:scale-105">
            <div className="flex justify-center h-56 w-64 object-cover">
              <Image
                src={dog.image.url}
                alt={dog.name}
                className="rounded-md h-56 w-64 object-cover"
                width={300}
                height={300}

              />
            </div>
            <div className="flex justify-center text-center">
              <h2 className="text-2xl font-bold my-4" >{dog.name}</h2>
            </div>
            <div className="flex justify-center text-center">
              <p className="text-gray-500">{dog.temperament}</p>
            </div>
            <div className="flex justify-center">
              <p className="text-gray-500">{dog.origin}</p>
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}

export default SectionBreeds;
