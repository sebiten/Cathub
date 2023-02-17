import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import useDogs from "../../hooks/useDogs";

function FavoritesPage() {
  const { favorito, eliminarFavorito } = useDogs();
  const { name, image, breed_for, breed_group, temperament, origin } = favorito;

  return (
    <>
    <Navbar/>
      <h1
       className="text-4xl text-center font-bold"
       >Favorites</h1>
      {favorito.map((dog) => (
        <div
        className="flex flex-col justify-center items-center gap-2"
        key={dog.id}>
          <p>{dog.name}</p>
          <p>{dog.origin}</p>
          <p>{dog.temperament}</p>
          <p>{dog.breed_for}</p>
          <p>{dog.breed_group}</p>
          <Image
           src={`https://cdn2.thedogapi.com/images/${dog.image}.jpg`}
           alt={name}
           width={500}
           height={500}
          />
          <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => eliminarFavorito(dog.name)}
          >Delete</button>
        </div>
      ))}
    </>
  );
}

export default FavoritesPage;
