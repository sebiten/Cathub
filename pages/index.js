import Image from "next/image";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default function Home({data}) {
  console.log(data);
  return (
    <div>
      <Navbar />
      <div>
        <Filter/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div className="p-2" key={message}>
            <Image
              src={message}
              alt="Picture of the author"
              width={500}
              height={500}
            />


      </div>
        ))}
    </div>
    </div>

  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dog.ceo/api/breed/hound/images");
  const data = await res.json();
  return {
    props: { data },
  };
}
