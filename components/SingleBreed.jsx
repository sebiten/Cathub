import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import useDogs from "../hooks/useDogs";

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
  breed_group,
}) {
  const { favorito, setFavorito, eliminarFavorito } = useDogs();
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    // Al cargar el componente, obtenemos la lista de favoritos del almacenamiento local
    const storedFavorites = JSON.parse(localStorage.getItem('favoritos'));
    if (storedFavorites) {
      setFavoritesList(storedFavorites);
    }
  }, []);

  function handleFavoriteClick() {
    if (!isFavorited) {
      setIsFavorited(true);
      const newFavorite = {
        name,
        image,
        temperament,
        life_span,
        origin,
        breedfor,
        description,
        width,
        height,
        breed_group,
      };
      // Verificar si el elemento ya está en la lista de favoritos
      if (!favoritesList.some((favorite) => favorite.image === image)) { // verificar la ID de la imagen
        const updatedFavorites = [...favoritesList, newFavorite];
        setFavoritesList(updatedFavorites);
        setFavorito([...favorito, newFavorite]);
        localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
      }
    } else {
      setIsFavorited(false);
      eliminarFavorito(name);
      const updatedFavorites = favoritesList.filter((favorite) => favorite.image !== image);
      setFavoritesList(updatedFavorites);
      localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
    }
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid object-center place-items-center mt-10 w-full md:w-1/2 mx-auto p-4 py-8">
  <Image
    src={`https://cdn2.thedogapi.com/images/${image}.jpg`}
    alt={name}
    width={600}
    height={500}
    className="rounded-lg"
    onClick={() => setIsOpen(true)}
  />
  <div className="flex flex-col w-full md:w-1/2">
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl font-bold uppercase my-5">
        {name}
      </h1>
      <p className="text-lg w-full">
        <span className="font-bold">Temperament:</span> {temperament}
      </p>
      <p className="text-lg w-full">
        <span className="font-bold">{origin ? `Origin: ` : ""}</span>
        {origin}
      </p>
      <p className="text-lg w-full">
        <span className="font-bold">
          {life_span ? `Life span: ` : ""}
        </span>
        {life_span}
      </p>
      <p className="text-lg w-full">
        <span className="font-bold">{breedfor ? `Breed for: ` : ""}</span>
        {breedfor}
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
      <p className="text-lg w-full">
        <span className="font-bold">
          {width ? `Width: ` : ""}
        </span>
        {width}
      </p>
      <p className="text-lg w-full">
        <span className="font-bold">
          {height ? `Height: ` : ""}
        </span>
        {height}
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 mt-6">
      <Link
        className="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 md:mb-0 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-900"
        href={`https://en.wikipedia.org/wiki/${name}`}
        target="_blank"
      >
        More information
      </Link>
      <button
        disabled={isFavorited}
        className="text-black bg-transparent hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 md:mb-0 dark:bg-transparent dark:hover:bg-sky-700 dark:focus:ring-sky-900"
        onClick={handleFavoriteClick}
      >
        {isFavorited ? "Favorited!" : "Add to favorites"}
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default SingleBreed;
