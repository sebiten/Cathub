import { createContext, useEffect, useState } from "react";

export const DogsContext = createContext();

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [searched, setSearched] = useState(false);

   const getStaticPaths = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
  
    const paths = data.map((dog) => {
      return {
        params: { breed: dog.name.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
  
   const getStaticProps = async (context) => {
    const breed = context.params.breed;
    const res = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?q=${breed}`
    );
    const data = await res.json();
  
    return {
      props: { dog: data[0] },
    };
  };

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
        getStaticPaths,
        getStaticProps,
      }}
    >
      {children}
    </DogsContext.Provider>
  );
};
