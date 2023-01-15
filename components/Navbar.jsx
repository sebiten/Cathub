import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#615375] p-4">
      <div className="flex items-center w-full">
        <Link
          href="/"
          className="text-white font-bold items-start flex flex-col justify-center uppercase font-mono text-2xl"
        >
          <Image
            src="/dog.png"
            width={55}
            height={55}
            alt="logo"
            className="mx-auto"
          />
          <h1>
            Dog<span className="text-black font-bold">hub</span>
          </h1>
        </Link>
          <ul className="flex gap-4 mx-auto text-white font-bold ">
            <li>
              <Link
              className="border-b-2 
              hover: border-purple-500 transition duration-300 ease-in-out"
              href="/">Home</Link>
            </li>
            <li>
              <Link 
              className="border-b-2 hover:border-purple-500 transition duration-300 ease-in-out hover:text-blac"
              href="/info">Favourites</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
