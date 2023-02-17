import { createContext, useEffect, useState } from "react";

export const DogsContext = createContext();

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [searched, setSearched] = useState(false);
  const [breed, setBreed] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [favorito, setFavorito] = useState([]);

  function handleFavoriteClick(name) {
    setFavorito([...favorito, name]);
  }

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      setFavorito(JSON.parse(favoritosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favorito));
  }, [favorito]);

  function eliminarFavorito(nombre) {
    setFavorito(favorito.filter((favorito) => favorito !== nombre));
  }


  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchDogData();
  }, []);
  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleDog = async (id) => {
    try {
      const res = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
      const data = await res.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Search handler
  useEffect(() => {
    async function fetchBreeds() {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${search}`
      );
      const data = await res.json();
      setResults(data);
    }
    setSearched(false);
    fetchBreeds();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <DogsContext.Provider
      value={{
        dogs,
        text,
        searched,
        handleSubmit,
        setText,
        getSingleDog,
        searchForDog,
        breed,
        setBreed,
        results,
        search,
        setSearch,
        searched,
        favorito,
        setFavorito,
        handleFavoriteClick,
        eliminarFavorito,
        
      }}
    >
      {children}
    </DogsContext.Provider>
  );
};
