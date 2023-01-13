import Image from "next/image";
import { useState } from "react";
import FavoriteImage from "../components/FavBreed";
import Navbar from "../components/Navbar";


export default function Home({ data }) {
  const [search, setSearch] = useState("hound");
  const [breed, setBreed] = useState("african");

  return (
        <div>
      <div>
      <Navbar />
      <div>
        <input
          type="text"
          className="border bg-slate-200 border-gray-400 rounded w-full p-2"
          placeholder="Search your favorite breed"
          defaultValue={breed}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
          <section
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}
        >
          {data.message.map((item, index) => {
            return (
              <div className="" key={index}>
                <FavoriteImage breed={item} />
                <img
                  src={item}
                  alt="Picture of theuthor"
                  className="w-full h-full object-cover border-none"
                />
              </div>
            );
          })}
        </section>
      </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://dog.ceo/api/breed/${search}/images`);
  const data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}


