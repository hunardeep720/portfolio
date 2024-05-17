import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="text-center max-w-screen-xl mx-auto m-10 gap-10 text-white grid sm:grid-cols-3 grid-cols-1 px-6 bg-black pt-24 sm:pt-40 justify-center items-center"
    >
      <p className="col-span-full text-3xl font-extrabold w-1/2 border-black border-b-2 mx-auto mb-10">
        Education
      </p>
      <p className="font-bold text-slate-300 text-2xl col-span-2">
        SOUTHERN ALBERTA INSTITUTE OF TECHNOLOGY (SAIT)
      </p>
      <p className="text-xl font-bold hidden sm:grid">January 2022- September 2024</p>
      <p className="text-xl font-bold sm:col-col-1 grid sm:px-16 sm:justify-start col-span-full text-slate-300">Diploma In Software Development</p>
      <p className="text-xl font-bold col-span-full sm:hidden">January 2022- September 2024</p>
      <ul className="col-span-full sm:pl-16 text-start text-xl">
        <li className="flex"><p className="pr-3 text-slate-300 mb-3">Relevant Coursework:</p>Data Structures, Algorithms, Web Development, Database Management</li>
        <li className="flex"><p className="pr-3 text-slate-300 mb-3">Projects:</p>Developed a full-stack web application for project management</li>
      </ul>
    </div>
  );
}

export default Education;
