import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="text-center">
        {/* Profile Image */}
        {/* <div className="mb-8 flex justify-center">
          <Image
            src="/images/profile/IMG_2240.jpeg"
            alt="Hunardeep Singh"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary"
          />
        </div> */}

        {/* Name and Introduction */}
        <h1 className="text-4xl sm:text-6xl font-bold text-heading mb-4">
          Hunardeep Singh
        </h1>
        <p className="text-lg sm:text-xl text-secondary mb-8 max-w-2xl mx-auto">
          I'm a <span className="text-primary font-semibold">full-stack</span> and
          <span className="text-primary font-semibold"> mobile developer</span>, skilled in building
          <span className="text-primary font-semibold"> responsive web</span> and
          <span className="text-primary font-semibold"> mobile applications</span> from
          <span className="text-primary font-semibold"> concept to deployment</span>.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
          <Link
            href="tel:8254888028"
            className="flex items-center gap-2 text-text hover:text-primary transition-colors"
          >
            <IoCall />
            (825)-488-8028
          </Link>
          <Link
            href="mailto:dhillonhunar@gmail.com"
            className="flex items-center gap-2 text-text hover:text-primary transition-colors"
          >
            <MdEmail />
            dhillonhunar@gmail.com
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <Link
            href="https://github.com/hunardeep720"
            target="_blank"
            className="text-secondary hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hunardeep-singh-9a5785269"
            target="_blank"
            className="text-secondary hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}