import Image from "next/image";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  console.log(data);
  return (
    <div>
      <Navbar />
      <div>
        <input
          type="text"
          className="border bg-slate-200 border-gray-400 rounded w-full p-2"
          placeholder="Search your favorite breed"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 object-cover bg-cover">
        {data.message.map((item, index) => {
          return (
            <div className=""key={index}>
              <Image
                src={item}
                alt="Picture of theuthor"
                width={500}
                height={1000}
              />
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://dog.ceo/api/breed/hound/images`);
  const data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
