import Image from "next/image";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default function Home({ data }) {
  return (
    <div>
      <Navbar />
      <div>
        <Filter/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((cat) => (
          <div
            className="w-full h-full bg-gray-200 rounded-md shadow-md bg-cover object-cover"
            key={cat.id}
          >
            <Image
              src={cat.url}
              alt="Cat"
              width={cat.width}
              height={cat.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
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
