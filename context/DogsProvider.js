import { createContext, useEffect, useState } from "react";

export const DogsContext = createContext();

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);
  const [breed, setBreed] = useState("");

  

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


  const handleSubmit = (e) => {
    e.preventDefault();

    searchForDog();
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
      }}
    >
      {children}
    </DogsContext.Provider>
  );
};
