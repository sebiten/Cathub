import useDogs from "../hooks/useDogs";

function Search() {
  const [search, setSearch] = React.useState("");
  const { dogs, setDogs } = useDogs();

  const searchBreed = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/search?q=${search}`
      );
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
         <form
         onSubmit={(e) => {
          e.preventDefault();
          searchBreed();
        }
      }
      >
        <input
          type="text"
          className="border bg-slate-200 border-gray-400 rounded w-full p-2"
          placeholder="Search your favorite breed"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form> 
  )
}

export default Search