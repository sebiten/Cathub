import Image from "next/image";
import Link from "next/link";
import useDogs from "../hooks/useDogs";

function Navbar() {

  return (
    <nav className="bg-[#6b4f92] p-4">
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
        <ul className="flex justify-center items-center gap-2 text-white font-bold w-full">
          <li className="bg-black bg-opacity-50 mx-auto px-4 rounded">
            <Link
              className="uppercase hover:text-purple-400 transition duration-300 ease-in-out "
              href="/"
            >
              Home
            </Link>
          </li>
          <li className=" px-4 rounded">
          <Link
              className="uppercase hover:text-purple-400 transition duration-300 ease-in-out "
              href="https://github.com/sebiten"
            >
              Github
            </Link>
          </li>
        
        </ul>
        <div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
