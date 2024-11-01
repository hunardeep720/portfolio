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
      <p className="text-xl font-bold hidden sm:grid italic">
        January 2022- September 2024
      </p>
      <p className="text-xl font-bold col-span-full sm:hidden italic">
        January 2022- September 2024
      </p>
    </div>
  );
}

export default Education;
