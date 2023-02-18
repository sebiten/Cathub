import useDogs from "../hooks/useDogs"

function Form() {
  const { search, setSearch, handleSubmit } = useDogs()
  return (
       <form
        className="flex justify-center items-center gap-2 border w-full  p-6 rounded-md shadow-md"
       onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-slate-200 text-gray-800 font-bold py-2 px-4 rounded"
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