import useDogs from "../hooks/useDogs"

function Form() {
  const { search, setSearch, handleSubmit } = useDogs()
  return (
       <form onSubmit={handleSubmit} autoComplete="off"
        className="flex flex-col md:flex-row justify-center items-center gap-2"
       >
          <input
            type="text"
            name="search"
            id="search"
            className=" bg-slate-200 border-gray-400 rounded w-full p-2"
            placeholder="Search your favorite breed"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-200 hover:bg-slate-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
  )
}

export default Form