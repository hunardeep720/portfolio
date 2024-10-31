"use client";
import React, { createRef, useEffect } from "react";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import GitHubSection from "./GithubSection";

export default function Projects() {
  const ref = createRef(null);
  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: [0.01, 0.3],
  });
  let mediaQuery = false;
  useEffect(() => {
    mediaQuery = window.matchMedia("(max-width: 1111px)");
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto sm:ml-28 m-4" id="projects">
      <motion.div
        ref={ref}
        style={{ opacity: mediaQuery.matches ? scrollYProgress : 1 }}
        id="Projects"
        className="bg-black grid text-white pt-24 justify-center items-center"
      >
        <p className="text-3xl font-extrabold border-black border-b-2 mb-8">
          Projects
        </p>
        {/* the brdge information */}
        <div className="w-2/3 flex justify-between">
          <div className="flex items-center">
            <p className="font-bold text-white text-2xl col-span-2 my-auto mr-1">
              At The
            </p>
            <Link href={"https://thebrdge.com/"} target="_blank">
              <img
                src="https://thebrdge.com/cdn/shop/files/Logo_-_Transparent_closer.png?v=1702859195&width=85"
                className="mb-2"
              />
            </Link>

            <p className="font-bold text-white text-2xl col-span-2 my-auto mr-1">
              {" "}
              - Developer (Part-Time)
            </p>
          </div>
          <div className="items-center flex">
            <p className="font-semibold text-white text-xl col-span-2 ml-5 italic">
              August 2024 - Present
            </p>
          </div>
        </div>
        <p className="text-white text-lg">
          I work as a{" "}
          <span className="text-yellow-300 font-semibold">solo developer</span>{" "}
          on a
          <span className="text-yellow-300 font-semibold">
            {" "}
            mobile and web application
          </span>{" "}
          for <span className="text-yellow-300 font-semibold">
            THE BRDGE
          </span>{" "}
          platform, a service that{" "}
          <span className="text-yellow-300 font-semibold">
            connects chefs directly with customers
          </span>{" "}
          by allowing chefs to{" "}
          <span className="text-yellow-300 font-semibold">
            list and sell their meals
          </span>{" "}
          according to customizable schedules. This app provides a{" "}
          <span className="text-yellow-300 font-semibold">
            convenient ordering experience
          </span>{" "}
          for customers while enabling chefs to{" "}
          <span className="text-yellow-300 font-semibold">
            manage meal availability
          </span>{" "}
          and{" "}
          <span className="text-yellow-300 font-semibold">
            optimize high-demand offerings
          </span>
          .
        </p>
        <div class="text-white text-lg mt-6">
          <h2 class="text-cyan-300 font-bold mb-4">Key Responsibilities:</h2>
          <ul class="list-disc list-inside ml-4 space-y-2">
            <li class="hover:text-cyan-500 transition-colors duration-300">
              Designed and developed{" "}
              <span class="font-semibold">full-stack application features</span>
              , starting from mockups to deployment.
            </li>
            <li class="hover:text-cyan-500 transition-colors duration-300">
              Collaborated on project planning, provided time estimates, and
              gathered feedback on{" "}
              <span class="font-semibold">design mocks</span> for approval.
            </li>
            <li class="hover:text-cyan-500 transition-colors duration-300">
              Implemented and tested features for both{" "}
              <span class="font-semibold">mobile and web interfaces</span> to
              ensure seamless user experience.
            </li>
            <li class="hover:text-cyan-500 transition-colors duration-300">
              Handled <span class="font-semibold">end-to-end deployment</span>{" "}
              and managed ongoing application updates.
            </li>
          </ul>

          <h2 class="text-cyan-300 font-bold mt-6">Technologies Used:</h2>
          <p class="hover:text-cyan-500 transition-colors duration-300">
            React Native (using Expo CLI)
          </p>
        </div>

        {/* projects at sait */}
        <div className="mx-auto col-span-full grid sm:grid-cols-2 grid-cols-1 gap-10">
          <p className="font-bold text-white text-2xl col-span-2 mt-16 -mb-5">At <span className="text-[#FF5A73]">{" "}SOUTHERN ALBERTA INSTITUTE of TECHNOLOGY{" "}</span> (SAIT)</p>
          <div className="col-span-full grid justify-center p-3 shadow-lg gap-8 sm:grid-cols-2 grid-cols-1">
            <iframe
              src="https://studentscoops.vercel.app/"
              width="100%"
              height="500px"
              className="border-0 overflow-scroll block col-span-1 sm:h-full z-0"
            />
            <div className="text-start">
              <span className="text-4xl p-2 font-extrabold 2xl:text-6xl">
                <Link
                  href={"https://github.com/Abdelmouzahir/studentscoops.git"}
                  className="hover:italic"
                >
                  Student Scoops
                </Link>

                <p className="italic font-light text-sm 2xl:text-lg mt-4">
                  (Capstone Project)
                </p>
              </span>
              <p className="text-xl font-semibold 2xl:text-5xl">2024</p>
              <p className="text-xl font-semibold my-4 2xl:text-4xl">
                Full Stack Developer
              </p>
              <p className="text-xl font-semibold 2xl:text-3xl 2xl:underline 2xl:underline-offset-8">
                Technologies: Next.js, firebase (Authentication for admin and
                client side authentication and Firestore Database){" "}
                <Link
                  href={
                    "https://developers.google.com/maps/documentation/javascript/cloud-setup"
                  }
                >
                  Google Maps API
                </Link>{" "}
                and nodemailer for sending emails for account or order
                confirmations.
              </p>
              <p className="mt-6 2xl:text-2xl 2xl:font-semibold">
                StudentScoops is a platform that reduces food waste by offering
                discounted surplus food to students. It supports three user
                roles: students, admins, and restaurants. The platform uses
                Firebase for authentication, Firestore for data management, and
                integrates Google Maps API to help students find the nearest
                vendors.
              </p>
              <p className="mt-4 font-semibold 2xl:text-3xl">Key Features:</p>
              <section className="pl-16 font-semibold 2xl:text-xl">
                <ul className="list-disc">
                  <li>
                    Admins have full control over students, vendors, and
                    employees, ensuring that all operations are securely handled
                    server-side.
                  </li>
                  <li>
                    Only eligible students are permitted to register,
                    maintaining a secure and restricted user base.
                  </li>
                  <li>
                    Database functions are designed to automatically listen for
                    changes and update webpages in real-time.
                  </li>
                  <li>
                    Students can instantly view newly uploaded food items
                    without needing to refresh the page.
                  </li>
                  <li>
                    The responsive design adjusts the user interface based on
                    screen size and scrolling behavior for optimal viewing.
                  </li>
                  <li>
                    When an item is sold out, it is immediately marked as such
                    for other students.
                  </li>
                  <li>
                    The platform tracks and stores order history for both
                    students and vendors.
                  </li>
                  <li>
                    Students can purchase food at discounted prices, offering a
                    cost-effective solution.
                  </li>
                </ul>
              </section>
            </div>
            <Link
              href="https://studentscoops.vercel.app/"
              target="_blank"
              className="p-4 m-2 border w-1/2 mx-auto bg-black col-span-full hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold z-10"
            >
              Visit
            </Link>
          </div>
          <div className="col-span-full grid justify-center p-3 shadow-lg gap-8 sm:grid-cols-2 grid-cols-1">
            <iframe
              src="https://deal-hives.vercel.app/"
              width="100%"
              height="500px"
              className="border-0 overflow-scroll block col-span-1 sm:h-full z-0"
            />
            <div className="text-start">
              <span className="text-4xl p-2 font-extrabold 2xl:text-6xl">
                <Link
                  href={"https://github.com/hunardeep720/dealHives.git"}
                  className="hover:italic"
                >
                  {" "}
                  Deal Hives
                </Link>

                <p className="italic font-light text-sm 2xl:text-lg mt-4">
                  (E-Commerce Online Store)
                </p>
              </span>

              <p className="text-xl font-semibold 2xl:text-5xl">2024</p>
              <p className="text-xl font-semibold my-4 2xl:text-4xl">
                Full Stack Developer
              </p>
              <p className="text-xl font-semibold 2xl:text-3xl 2xl:underline 2xl:underline-offset-8">
                Technologies: Next.js, firebase (Authentication and Firestore
                Database), Real-Time Amazon Data ( Rapid API)
              </p>
              <p className="mt-6 2xl:text-2xl 2xl:font-semibold">
                Deal Hives is an e-commerce platform developed using Next.js.
                The platform utilizes Firebase for authentication and Firestore
                Database for data management. Additionally, it integrates with
                the Real-Time Amazon Data to display products available for
                purchase.
              </p>
              <p className="mt-4 font-semibold 2xl:text-3xl">Key Features:</p>
              <section className="pl-16 font-semibold 2xl:text-xl">
                <ul className="list-disc">
                  <li>
                    Secure User Authentication:Users can sign in and sign out,
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
                    User Profile Management: Users can add and edit their
                    details for a customized experience.
                  </li>
                  <li>
                    Access Control: Certain features, such as product browsing
                    and checkout, are only available to signed-in users.
                  </li>
                  <li>
                    Streamlined User Experience: Signed-in users are directed
                    straight to the main website interface, bypassing the
                    sign-in and sign-up pages.
                  </li>
                  <li>
                    Responsive Design: The website is fully responsive, ensuring
                    a seamless experience across all devices, including
                    desktops, tablets, and mobile phones.
                  </li>
                </ul>
              </section>
            </div>
            <Link
              href="https://deal-hives.vercel.app/"
              target="_blank"
              className="p-4 m-2 border w-1/2 mx-auto bg-black col-span-full hover:text-black hover:bg-white hover:border-0 text-white rounded-lg font-bold z-10"
            >
              Visit
            </Link>
          </div>
        </div>
        <GitHubSection />
      </motion.div>
    </div>
  );
}
