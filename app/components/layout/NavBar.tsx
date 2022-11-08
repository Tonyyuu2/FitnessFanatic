import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between bg-indigo-500 w-full h-20 p-4 ">
      <Link href="/" className=" hover:text-white text-4xl font-bold">
        FitnessApp
      </Link>
      <nav>
        <ul className="hover:text-white text-2xl list-none m-0 p-0 flex items-baseline ">
          <li className="ml-12">
            <Link href="/">Home</Link>
          </li>
          <li>{/* add links here */}</li>
        </ul>
      </nav>
    </header>
  );
}
