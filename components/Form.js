import { useState } from "react";
import useDogs from "../hooks/useDogs"

function Form() {
  const { search, setSearch } = useDogs();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.length === 0) {
      alert("El campo no puede estar vacío");
      return;
    }
    if (inputValue.length < 5) {
      alert("El campo debe tener al menos 5 caracteres");
      return;
    }
    // aqui iría la logica para enviar el formulario
  }
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
            onClick={handleSubmit}
            type="submit"
            className="bg-slate-200 hover:bg-slate-300 text-gray-800 font-bold py-2 px-4 rounded flex flex-row"
          >
            Search
          </button>
        </form>
  )
}

export default Form