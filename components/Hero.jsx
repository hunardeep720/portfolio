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
        <p className="font-bold text-2xl mt-4 text-cyan-300">
          I'm a software developer
        </p>
      </div>

      <div className="mt-8 flex flex-col text-xl items-start">
        <Link href={`tel:8254888028`}>
          <p className="font-semibold text-cyan-300 hover:text-slate-400 flex items-center gap-2">
          <IoCall/>(825)-488-8028
          </p>
        </Link>
        <Link
          href={`mailto:dhillonhunar@gmail.com`}
          className="my-3 font-semibold text-cyan-300 hover:text-slate-400 flex items-center gap-2"
        >
          <MdEmail/>DHILLONHUNAR@GMAIL.COM
        </Link>
        <div className="flex">
          <Link
            href="https://github.com/hunardeep720"
            target="_blank"
            className="pr-3 border-r-2 border-black font-semibold hover:text-slate-400 text-cyan-300 flex gap-2 items-center"
          >
            <FaGithub/>GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/hunardeep-singh-9a5785269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbGDtpMeVRRyJpG107HUDsA%3D%3D"
            target="_blank"
            className="pl-3 font-semibold text-cyan-300 hover:text-slate-400 flex gap-2 items-center"
          >
            <FaLinkedin/>LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
