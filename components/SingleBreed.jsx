import Image from "next/image";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";

function SingleBreed({
  name,
  image,
  temperament,
  life_span,
  origin,
  breedfor,
  description,
  width,
  height,
}) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid object-center place-items-center mt-10 w-1/2 mx-auto bg-[#f4f4f4] p-4 py-8">
        <Image
          src={`https://cdn2.thedogapi.com/images/${image}.jpg`}
          alt={name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-center text-3xl font-bold uppercase my-5">
              {name}
            </h1>
            <p className="text-lg w-full">Temperament: {temperament}</p>
            <p className="text-lg w-full">
              {origin ? `Origin: ${origin}` : ""}
            </p>
            <p className="text-lg w-full">Life time:{life_span}</p>
          </div>
          <div className="flex item-center justify-center gap-8 mt-6">
            <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to favourites</button>
            <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">More information</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SingleBreed;
