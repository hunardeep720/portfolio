"use client";
import React, { useState, createRef } from "react";
import { useScroll, motion } from "framer-motion";

function Skills() {
  const [frontierBg, setFrontierBg] = useState("black");
  const [frontierTxt, setFrontierTxt] = useState("white");
  const [backendBg, setBackendBg] = useState("white");
  const [backendTxt, setBackendTxt] = useState("black");
  const [frontier, setFrontier] = useState(true);
  const ref2 = createRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2.current,
    offset: [0.5, 1],
  });
  return (
    <motion.div
      ref={ref2}
      style={{ opacity: scrollYProgress }}
      id="skills"
      className="text-center text-black grid px-6 bg-white pt-24 sm:pt-40 justify-center items-center mb-44"
    >
      <p className="text-3xl font-extrabold border-black border-b-2 mx-auto mb-10">
        Skills
      </p>
      <div className="grid grid-cols-2">
        <p
          style={{ backgroundColor: `${frontierBg}`, color: `${frontierTxt}` }}
          onClick={() => {
            setBackendBg("white");
            setBackendTxt("black");
            setFrontierTxt("white");
            setFrontierBg("black");
            setFrontier(true);
          }}
          className="cursor-pointer p-3 sm:px-32 text-2xl font-bold"
        >
          Frontier
        </p>
        <p
          style={{ backgroundColor: `${backendBg}`, color: `${backendTxt}` }}
          onClick={() => {
            setFrontierBg("white");
            setFrontierTxt("black");
            setBackendBg("black");
            setBackendTxt("white");
            setFrontier(false);
          }}
          className="cursor-pointer p-3 sm:px-32 text-2xl font-bold"
        >
          Backend
        </p>
        <div className={frontier ? "col-span-full m-3 mt-10 gap-8" : "hidden"}>
          <ul className="grid grid-cols-1">
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              HTML<p>2023</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              CSS<p>2023</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              JavaScript<p>2023</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              React.js<p>2024</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              Next.js<p>2024</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              React-native<p>2024</p>
            </li>
          </ul>
        </div>
        <div className={!frontier ? "col-span-full m-3 mt-10 gap-8" : "hidden"}>
          <ul className="grid grid-cols-1">
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>Python</p>
              <p>2023</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>C#</p>
              <p>2023</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>Java</p>
              <p>2024</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>Rust</p>
              <p>2024</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>AI900</p>
              <p>2024</p>
            </li>
            <li className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3">
              <p>AZ900</p>
              <p>2024</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
