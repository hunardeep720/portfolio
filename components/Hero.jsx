import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="home" className=" max-w-screen-xl mx-auto m-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-black bg-white pt-24 sm:pt-40">
      <div className="flex justify-center items-center text-center">
        <p className="rounded-full sm:w-60 sm:h-60 h-32 w-32 border-black border-4 text-center">hbeufbuebf</p>
      </div>
      <div className="text-center grid items-center">
        <h1 className="text-2xl font-extrabold sm:text-4xl">Hi, I'm Hunardeep Singh</h1>
        <p className="text-center font-bold text-xl">I'm a software engineer</p>
        <div className="col-span-full">
          <Link href={`tel:${8254888028}`}>
            <p>(825)-488-8028</p>
          </Link>
        </div>
      </div>
      {/* <hr className="col-span-full my-10 sm:my-36 border-black sm:border-2" /> */}
    </div>
  );
}
