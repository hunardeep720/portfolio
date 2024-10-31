import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="home"
      className=" max-w-screen-xl mx-auto m-10 text-white bg-black pt-24 sm:pt-40 sm:ml-28 ml-4 grid sm:grid-cols-2"
    >
      <div className="h-full w-full grid items-end">
        {" "}
        <h1 className="text-2xl font-extrabold sm:text-5xl text-cyan-300">
          Hunardeep Singh
        </h1>
        <p className="font-bold text-lg mt-6 text-cyan-200">
          I’m a
          <span className="text-cyan-500">
            {" "}full-stack{" "}
          </span>
          and
          <span className="text-cyan-500">
          {" "}mobile developer{" "}
          </span>
          , skilled in building
          <span className="text-cyan-500">
          {" "}responsive web{" "}
          </span>
          and
          <span className="text-cyan-500">
          {" "}mobile applications{" "}
          </span>
          from
          <span className="text-cyan-500">
          {" "}concept to deployment{" "}
          </span>
          .
        </p>
      </div>

      <div className="mt-8 flex flex-col text-xl items-start">
        <Link href={`tel:8254888028`}>
          <p className="font-semibold text-cyan-300 hover:text-slate-400 flex items-center gap-2 hover:text-lg">
            <IoCall />
            (825)-488-8028
          </p>
        </Link>
        <Link
          href={`mailto:dhillonhunar@gmail.com`}
          className="my-3 font-semibold text-cyan-300 hover:text-slate-400 flex items-center gap-2 hover:text-lg"
        >
          <MdEmail />
          DHILLONHUNAR@GMAIL.COM
        </Link>
        <div className="flex">
          <Link
            href="https://github.com/hunardeep720"
            target="_blank"
            className="pr-3 border-r-2 border-black font-semibold hover:text-slate-400 text-cyan-300 flex gap-2 items-center hover:text-lg"
          >
            <FaGithub />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/hunardeep-singh-9a5785269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbGDtpMeVRRyJpG107HUDsA%3D%3D"
            target="_blank"
            className="pl-3 font-semibold text-cyan-300 hover:text-slate-400 flex gap-2 items-center hover:text-lg"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
