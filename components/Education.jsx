import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="max-w-screen-xl mx-auto m-10 gap-7 text-white grid sm:px-28 bg-black pt-10 w-full px-3"
    >
      <p className="col-span-full text-3xl font-extrabold w-1/2 border-black border-b-2 my-4">
        Education
      </p>
      <p className="font-bold text-slate-300 text-2xl col-span-2">
        SOUTHERN ALBERTA INSTITUTE OF TECHNOLOGY (SAIT)
      </p>
      <p className="text-xl font-bold grid sm:justify-start text-slate-300">
        Diploma In Software Development
      </p>
      <p className="text-xl font-bold hidden sm:grid">
        January 2022- September 2024
      </p>
      <p className="text-xl font-bold col-span-full sm:hidden">
        January 2022- September 2024
      </p>
      {/* <ul className="col-span-full text-start text-xl gap-7 pt-3 grid ">
        <li>
          <p className="pr-3 text-slate-300 mb-3">Relevant Coursework:</p>Data
          Structures, Algorithms, Web Development, Database Management
        </li>
        <li>
          <p className="pr-3 text-slate-300 mb-3">Projects:</p>Developed a
          full-stack web application for project management
        </li>
      </ul> */}
    </div>
  );
}

export default Education;
