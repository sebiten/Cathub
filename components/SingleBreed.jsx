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
      <div class="grid place-items-center mt-10 mx-auto p-4 py-8 max-w-screen-md lg:grid-cols-2">
  <div class="max-w-md mx-auto">
    <Image
      width={500}
      height={500}
      src={`https://cdn2.thedogapi.com/images/${image}.jpg`}
      alt={name}
      class="w-full h-full object-cover rounded-lg cursor-pointer"
      onClick={() => setIsOpen(true)}
    />
  </div>
  <div class="flex flex-col justify-center max-w-xl mx-auto mt-8 lg:mt-0 lg:ml-8">
    <h1 class="text-3xl font-bold uppercase my-5 text-center lg:text-left">
      {name}
    </h1>
    <p class="text-lg w-full">
      <span class="font-bold">Temperament:</span> {temperament}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">{origin ? `Origin: ` : ""}</span>
      {origin}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">
        {life_span ? `Life span: ` : ""}
      </span>
      {life_span}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">{breedfor ? `Breed for: ` : ""}</span>
      {breedfor}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">
        {breed_group ? `Breed group: ` : ""}
      </span>
      {breed_group}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">
        {description ? `Description: ` : ""}
      </span>
      {description}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">
        {width ? `Width: ` : ""}
      </span>
      {width}
    </p>
    <p class="text-lg w-full">
      <span class="font-bold">
        {height ? `Height: ` : ""}
      </span>
      {height}
    </p>

    <div class="flex flex-col lg:flex-row justify-center items-center gap-8 mt-6">
      <Link
        class="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-900 lg:mr-4"
        href={`https://en.wikipedia.org/wiki/${name}`}
        target="_blank"
      >
        More information
      </Link>
      <button
        disabled={isFavorited}
        class="text-black bg-transparent hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-transparent dark:hover:bg-sky-700 dark:focus:ring-sky-900 lg:ml-4"
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