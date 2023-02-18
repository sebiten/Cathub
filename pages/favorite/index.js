import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import useDogs from "../../hooks/useDogs";

function FavoritesPage() {
  const { favorito, setFavorito, eliminarFavorito, handleFavoritoClick } =
    useDogs();
  const {
    name,
    image,
    breed_for,
    breed_group,
    temperament,
    origin,
    description,
  } = favorito;

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center font-bold my-4">Favorites</h1>
      <div className="grid grid-cols-3 ">
        {favorito.map((dog) => (
          <div
            className="flex flex-col justify-center items-center gap-2 border w-full bg-slate-200 p-4 rounded-md shadow-md "
            key={dog?.id}
          >
            <Image
              src={`https://cdn2.thedogapi.com/images/${dog?.image}.jpg`}
              alt={name}
              width={800}
              height={500}
              className="rounded-md w-[800px] h-[500px] "
            />
            <div className="text-lg flex flex-col justify-start w-full">
              <p>
                <span className="font-bold uppercase">Name: </span>
                {dog?.name}
              </p>
              <p>
                <span className="font-bold uppercase">Origin: </span>
                {dog?.origin}
              </p>
              <p>
                <span className="font-bold uppercase">temperament: </span>
                {dog?.temperament}
              </p>
              <div>
                <p className="text-lg w-full">
                  <span className="font-bold">{origin ? `Origin: ` : ""}</span>
                  {origin}
                </p>

                <p className="text-lg w-full">
                  <span className="font-bold">
                    {breed_for ? `Breed for: ` : ""}
                  </span>
                  {breed_for}
                </p>
                <p className="text-lg w-full">
                  <span className="font-bold">
                    {breed_group ? `Breed group: ` : ""}
                  </span>
                  {breed_group}
                </p>
                <p className="text-lg w-full">
                  <span className="font-bold">
                    {description ? `Description: ` : ""}
                  </span>
                  {description}
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 w-full">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full "
                onClick={() => handleFavoritoClick(dog)}
              >
                Eliminar de favoritos
              </button>
              <Link
                href={`/breed/${dog?.name}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full text-center"
              >
                More information
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
