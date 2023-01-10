import { createContext } from "react"

export const DogContext = createContext()

const Dogprovider = ({ children }) => {

  const DogBreed = async () => {
    const res = await fetch(
      "https://dog.ceo/api/breed/images"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };


  }

 
  return (
    <DogContext.Provider 
    value={{
      dog: "dog",
    }}>
      {children}
    </DogContext.Provider>
  )
}


export default Dogprovider