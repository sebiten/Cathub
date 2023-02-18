import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import useDogs from "../../hooks/useDogs";

function FavoritesPage() {
  const { favorito, setFavorito, eliminarFavorito, handleFavoritoClick} = useDogs();
  const { name, image, breed_for, breed_group, temperament, origin } = favorito;

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center font-bold my-4">Favorites</h1>
      <div className="grid grid-cols-3 ">
        {favorito.map((dog) => (
          <div
            className="flex flex-col justify-center items-center gap-2 border w-full bg-slate-200 p-4"
            key={dog?.id}
          >
            <Image
              src={`https://cdn2.thedogapi.com/images/${dog?.image}.jpg`}
              alt={name}
              width={500}
              height={500}
            />
            <p>{dog?.name}</p>
            <p>{dog?.origin}</p>
            <p>{dog?.temperament}</p>
            <p>{dog?.breed_for}</p>
            <p>{dog?.breed_group}</p>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleFavoritoClick(dog)}
            >
              Eliminar de favoritos
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
