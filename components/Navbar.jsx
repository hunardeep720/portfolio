import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="text-white max-w-screen-2xl mx-auto bg-black fixed top-0 left-0 right-0 bottom-0 grid grid-cols-4 text-center items-center h-16 sm:h-36 gap-2 z-20">
      <div>
        <Link href="/#home">
          <p className="font-extrabold text-lg sm:text-4xl hover:text-slate-500">Home</p>
        </Link>
      </div>
      <div>
      <Link href="/#education">
          <p className="font-extrabold text-lg sm:text-4xl hover:text-slate-300">Education</p>
        </Link>
      </div>
      <div>
      <Link href="/#experience">
          <p className="font-extrabold text-lg sm:text-4xl hover:text-slate-300">Projects</p>
        </Link>
      </div>
      <div>
      <Link href="/#skills">
          <p className="font-extrabold text-lg sm:text-4xl  hover:text-slate-300">Skills</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
