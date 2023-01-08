import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#615375] p-2">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-white font-bold items-start flex flex-col justify-center uppercase font-mono text-2xl"
        >
          <Image
            src="/cathub.png"
            width={55}
            height={55}
            alt="logo"
            className="mx-auto"
          />
          <h1>
            Cat<span className="text-black font-bold">hub</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row">
        <ul className="flex gap-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/info">Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
