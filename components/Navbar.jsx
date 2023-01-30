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
          <li className=" bg-white gap-2 bg-opacity-50 mx-auto rounded ">
            <Link
              className="uppercase text-black flex items-center justify-center gap-2 hover:text-white py-1 px-2 transition duration-300 ease-in-out"
              href="/"
            >
              <svg
                width="25px"
                height="30px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M256 27.52L25 212.3v41L256 68.48 487 253.3v-41L256 27.52zm0 64L73 237.9V487h94c.1-32.3.8-79.5 10.2-121 5.2-22.7 12.9-43.9 25.4-60 12.6-16.2 30.7-27 53.4-27s40.8 10.8 53.4 27c12.5 16.1 20.2 37.3 25.4 60 9.4 41.5 10.1 88.7 10.2 121h94V237.9L256 91.52zM163.9 198.2a25.03 14.73 15.04 0 1 12.1 2.2 25.03 14.73 15.04 0 1 17.7 14.6h124.6a14.73 25.03 74.96 0 1 17.7-14.6 14.73 25.03 74.96 0 1 12.1-2.2 14.73 25.03 74.96 0 1 17.8 7.8 14.73 25.03 74.96 0 1-13 19.6 25.03 14.73 15.04 0 1 10.7 18.4 25.03 14.73 15.04 0 1-29.9 5.7 25.03 14.73 15.04 0 1-18.1-16.7H196.4a14.73 25.03 74.96 0 1-18.1 16.7 14.73 25.03 74.96 0 1-29.9-5.7 14.73 25.03 74.96 0 1 10.7-18.4 25.03 14.73 15.04 0 1-13-19.6 25.03 14.73 15.04 0 1 17.8-7.8z"
                />
              </svg>
              Home
          
            </Link>
          </li>
          <li className="">
            <Link
              className="uppercase text-black flex items-center justify-center gap-2 hover:text-white py-2 px-2 transition duration-300 ease-in-out"
              href="https://github.com/sebiten"
            >
              <Image
              src="/github.svg"
              alt="github-icon"
              width={25}
              height={30}
              />
              Github
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
