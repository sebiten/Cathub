import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FavoriteImage from "../components/FavBreed";
import Navbar from "../components/Navbar";
import SectionBreeds from "../components/SectionBreeds";

export default function Home() {

  const [search, setSearch] = useState("");
  
  return (
    
        <div>
      <div>
      <Navbar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch("");
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
    </div>
        <SectionBreeds/>
      </div>    
  );
}





