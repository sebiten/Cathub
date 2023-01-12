import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

function FavoriteImage({ breed }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleClick() {
    setIsFavorited(!isFavorited);
  }

  return (
    <div className="relative">
      <svg
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={handleClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorited ? '#F44336' : 'none'}
        stroke={isFavorited ? '#F44336' : '#000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    </div>
  );
}
export default function Home({ data }) {
  return (
        <div>
      <div>
      <Navbar />
      <div>
        <input
          type="text"
          className="border bg-slate-200 border-gray-400 rounded w-full p-2"
          placeholder="Search your favorite breed"
          value={""}
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
                  className="w-full h-full object-cover "
                />
              </div>
            );
          })}
        </section>
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


