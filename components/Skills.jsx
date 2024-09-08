"use client";
import React, { useState, createRef } from "react";
import { useScroll, motion } from "framer-motion";

function Skills({ front, back }) {
  const [frontierBg, setFrontierBg] = useState("white");
  const [frontierTxt, setFrontierTxt] = useState("black");
  const [backendBg, setBackendBg] = useState("black");
  const [backendTxt, setBackendTxt] = useState("white");
  const [frontier, setFrontier] = useState(true);
  const ref2 = createRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2.current,
    offset: [0.4, 1],
  });
  return (
    <div className="mb-44 z-0 max-w-screen-xl mx-auto sm:ml-28">
      <motion.div
        ref={ref2}
        style={{ opacity: scrollYProgress }}
        id="skills"
        className="bg-black grid text-white pt-24 sm:pt-40"
      >
        <p className="text-3xl font-extrabold border-black border-b-2 mb-10 w-full">
          Skills
        </p>
        <div className="grid grid-cols-2">
          <p
            style={{
              backgroundColor: `${frontierBg}`,
              color: `${frontierTxt}`,
            }}
            onClick={() => {
              setBackendBg("black");
              setBackendTxt("white");
              setFrontierTxt("black");
              setFrontierBg("white");
              setFrontier(true);
            }}
            className="cursor-pointer p-3 sm:px-32 text-2xl font-bold"
          >
            Frontier
          </p>
          <p
            style={{ backgroundColor: `${backendBg}`, color: `${backendTxt}` }}
            onClick={() => {
              setFrontierBg("black");
              setFrontierTxt("white");
              setBackendBg("white");
              setBackendTxt("black");
              setFrontier(false);
            }}
            className="cursor-pointer p-3 sm:px-32 text-2xl font-bold"
          >
            Backend
          </p>
          <div
            className={frontier ? "col-span-full m-3 mt-10 gap-8" : "hidden"}
          >
            <ul className="grid grid-cols-1">
              {front.map((skill, index) => (
                <li
                  className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3"
                  key={index}
                >
                  {skill.name}
                  <p>{skill.year}</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={!frontier ? "col-span-full m-3 mt-10 gap-8" : "hidden"}
          >
            <ul className="grid grid-cols-1">
              {back.map((skill, index) => (
                <li
                  className="p-4 text-xl font-semibold shadow-xl cursor-not-allowed grid grid-cols-2 my-3"
                  key={index}
                >
                  {skill.name}
                  <p>{skill.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
