import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className=" max-w-screen-xl mx-auto m-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-white bg-black pt-24 sm:pt-40 items-center justify-center text-center"
    >
      <div className="flex justify-center items-center text-center rounded-full sm:h-56 sm:w-56 border-5 mx-auto h-44 w-44 mb-10">
      <Image
          src="/profile/IMG_1968.jpeg"
          alt="Hunardeep Singh"
          width={150}
          height={150}
          className="rounded-full"
          layout="responsive"
          //objectFit="fit"
        />
      </div>
      <div className="text-center grid items-center justify-center w-full">
        <h1 className="text-2xl font-extrabold sm:text-4xl text-center text-cyan-300">
          Hi, I'm Hunardeep Singh
        </h1>
        <p className="text-center font-bold text-xl mt-2 text-cyan-300">
          I'm a software developer
        </p>
        <div className="mt-8 col-span-full flex flex-col">
          <Link href={`tel:8254888028`}>
            <p className="font-semibold text-blue-500 hover:text-slate-400">(825)-488-8028</p>
          </Link>
          <Link
            href={`mailto:dhillonhunar@gmail.com`}
            className="my-3 font-semibold text-blue-500 hover:text-slate-400"
          >
            DHILLONHUNAR@GMAIL.COM
          </Link>
          <div>
            <Link
              href="https://github.com/hunardeep720"
              target="_blank"
              className="pr-3 border-r-2 border-black font-semibold hover:text-slate-400 text-blue-500"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/hunardeep-singh-9a5785269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbGDtpMeVRRyJpG107HUDsA%3D%3D"
              target="_blank"
              className="pl-3 font-semibold text-blue-500 hover:text-slate-400"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      {/* <hr className="col-span-full my-10 sm:my-36 border-black sm:border-2" /> */}
    </div>
  );
}
