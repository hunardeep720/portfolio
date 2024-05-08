"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function Experience() {
  const [xyzDetails, setXYZDetails] = useState(false);
  const [photographyDetails, setPhotographyDetails] = useState(false);
  return (
    <div
      id="experience"
      className="text-center max-w-screen-xl mx-auto m-10 gap-5 text-black grid px-6 bg-white pt-24 sm:pt-40 justify-center items-center"
    >
      <p className="text-3xl font-extrabold border-black border-b-2 mx-auto mb-10">
        Experience
      </p>
      <div className="col-span-full grid sm:grid-cols-3 grid-cols-1 gap-10">
        <div
          className={
            xyzDetails
              ? "hidden"
              : "col-span-full sm:col-span-1 grid justify-center items-center text-center p-3 shadow-lg"
          }
        >
          <iframe
            src="https://xyz-online-store-iq2a.vercel.app/"
            className="col-span-full border-0 overflow-scroll block"
            width="100%"
            height="500px"
          />
          <button
            onClick={() => {
              setXYZDetails(true);
            }}
            className="p-4 m-2 border w-1/2 mx-auto bg-black hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold"
          >
            Details
          </button>
        </div>
        <div
          className={
            xyzDetails
              ? "col-span-full grid justify-center p-3 shadow-lg gap-8 sm:grid-cols-2 grid-cols-1"
              : "hidden"
          }
        >
          <iframe
            src="https://xyz-online-store-iq2a.vercel.app/"
            className="border-0 overflow-scroll block col-span-1"
            width="100%"
            height="500px"
          />
          <div className="text-start">
            <p className="text-4xl p-3 font-extrabold">XYZ Online Store</p>
            <p className="text-xl font-semibold">2021-2022</p>
            <p className="text-xl font-semibold my-4">Full Stack Developer</p>
            <p className="text-xl font-semibold">
              Technologies: Next.js, firebase (Authentication and Firestore
              Database), Amazon API
            </p>
            <p>
              XYZ Online Store is an e-commerce platform developed using
              Next.js. The platform utilizes Firebase for authentication and
              Firestore Database for data management. Additionally, it
              integrates with the Amazon API to display products available for
              purchase.
            </p>
            <p>Key Features:</p>
            <section className="pl-16">
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
            className="p-4 m-2 border w-1/2 mx-auto bg-black hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold"
          >
            Visit
          </Link>
          <button
            onClick={() => {
              setXYZDetails(false);
            }}
            className="p-4 m-2 border w-1/2 mx-auto bg-black hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold"
          >
            Less
          </button>
        </div>
        <div className="col-span-full sm:col-span-1 grid justify-center items-center text-center shadow-lg">
          <iframe
            src="https://photograpy-pied.vercel.app/"
            className="col-span-full border-0 overflow-scroll block"
            width="100%"
            height="500px"
          />
          <button className="p-4 m-2 border w-1/2 mx-auto bg-black hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
