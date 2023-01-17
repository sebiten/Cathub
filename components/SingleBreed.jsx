import Image from "next/image";
import React from "react";

function SingleBreed({ name, image, temperament, life_span, origin, breedfor,  description, width, height }) {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-1/2 border-2 p-4 ">
      <div className="flex gap-3">
      <div className="flex justify-center flex-col">
        <h1>Name: {name}</h1>
        <p>Temperament: {temperament}</p>
        <p>{origin ? `Origin: ${origin}` : ""}</p>
        <p>Life time:{life_span}</p>
        <p>{breedfor}</p>
        <p>{description}</p>
        <p>height: {height}</p>
      </div>
      <Image
        src={`https://cdn2.thedogapi.com/images/${image}.jpg`}
        alt={name}
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
      </div>
  );
}

export default SingleBreed;
