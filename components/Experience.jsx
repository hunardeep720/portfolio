"use client";
import React, { createRef } from "react";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";

export default function Experience() {
  const ref = createRef(null);
  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: [0.01, 0.3],
  });
  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollYProgress }}
      id="experience"
      className="text-center text-black grid bg-white pt-24 sm:pt-40 justify-center items-center"
    >
      <p className="text-3xl font-extrabold border-black border-b-2 mx-auto mb-16">
        Experience
      </p>
      <div className="mx-auto col-span-full grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="col-span-full grid justify-center p-3 shadow-lg gap-8 sm:grid-cols-2 grid-cols-1">
          <iframe
            src="https://xyz-online-store-iq2a.vercel.app/"
            width="100%"
            height="500px"
            className="border-0 overflow-scroll block col-span-1 sm:h-full"
          />
          <div className="text-start">
            <p className="text-4xl p-3 font-extrabold 2xl:text-6xl">
              XYZ Online Store
            </p>
            <p className="text-xl font-semibold 2xl:text-5xl">2024</p>
            <p className="text-xl font-semibold my-4 2xl:text-4xl">
              Full Stack Developer
            </p>
            <p className="text-xl font-semibold 2xl:text-3xl 2xl:underline 2xl:underline-offset-8">
              Technologies: Next.js, firebase (Authentication and Firestore
              Database), Amazon API
            </p>
            <p className="mt-6 2xl:text-2xl 2xl:font-semibold">
              XYZ Online Store is an e-commerce platform developed using
              Next.js. The platform utilizes Firebase for authentication and
              Firestore Database for data management. Additionally, it
              integrates with the Amazon API to display products available for
              purchase.
            </p>
            <p className="mt-4 font-semibold 2xl:text-3xl">Key Features:</p>
            <section className="pl-16 font-semibold 2xl:text-3xl">
              <ul className="list-disc">
                <li>
                  Secure User Authentication: Users can sign in and sign out,
                  ensuring data privacy and security.
                </li>
                <li>
                  Personalized Experience: Each user has their own cart, where
                  they can add products and view items they've added.
                </li>
                <li>
                  Seamless Product Management: Users can easily search for
                  products and add them to their cart.
                </li>
                <li>
                  User Profile Management: Users can add and edit their details
                  for a customized experience.
                </li>
                <li>
                  Access Control: Certain features, such as product browsing and
                  checkout, are only available to signed-in users.
                </li>
                <li>
                  Streamlined User Experience: Signed-in users are directed
                  straight to the main website interface, bypassing the sign-in
                  and sign-up pages.
                </li>
              </ul>
            </section>
          </div>
          <Link
            href="https://xyz-online-store-iq2a.vercel.app/"
            target="_blank"
            className="p-4 m-2 border w-1/2 mx-auto bg-black col-span-full hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold"
          >
            Visit
          </Link>
        </div>
        <div className="mt-10 col-span-full grid justify-center p-3 shadow-lg gap-8 sm:grid-cols-2 grid-cols-1">
          <iframe
            src="https://photograpy-pied.vercel.app/"
            width="100%"
            height="500px"
            className="border-0 overflow-scroll block col-span-1 sm:h-full"
          />
          <div className="text-start">
            <p className="text-4xl p-3 font-extrabold 2xl:text-6xl">Capture</p>
            <p className="text-xl font-semibold 2xl:text-5xl">2024</p>
            <p className="text-xl font-semibold my-4 2xl:text-4xl">
              Full Stack Developer
            </p>
            <p className="text-xl font-semibold 2xl:text-3xl 2xl:underline 2xl:underline-offset-8">
              Technologies: Next.js
            </p>
            <p className="mt-6 2xl:text-2xl 2xl:font-semibold">
              Capture, developed in 2024, is a photography website built with
              Next.js. It offers a platform to explore various image works with
              a user-friendly interface. Here are some of its notable features.
            </p>
            <p className="mt-4 font-semibold 2xl:text-3xl">Key Features:</p>
            <section className="pl-16 font-semibold 2xl:text-3xl">
              <ul className="list-disc">
                <li>Utilizes Next.js icons to enhance the UI experience.</li>
                <li>Fetches images via image URLs.</li>
                <li>Implements separate pages for distinct functionalities.</li>
                <li>
                  Simplifies code management by passing components as props to
                  other components.
                </li>
                <li>
                  Responsive design adapts UI based on screen size and scrolling
                  behavior.
                </li>
                <li>
                  Organizes images with icons using the group method for
                  improved accessibility and navigation.
                </li>
              </ul>
            </section>
          </div>
          <Link
            href="https://photograpy-pied.vercel.app/"
            target="_blank"
            className="p-4 m-2 border w-1/2 mx-auto bg-black col-span-full hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold"
          >
            Visit
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
