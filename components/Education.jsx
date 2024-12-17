import React from "react"

function Education() {
  return (
    <section id="education" className="py-16 shadow-lg rounded-xl transform transition-all hover:scale-[1.01] hover:-translate-y-1 duration-300">
      <h2 className="text-3xl font-bold mb-8 text-heading">Education</h2>
      <div className="bg-lightBackground rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-primary mb-2">
          SOUTHERN ALBERTA INSTITUTE OF TECHNOLOGY (SAIT)
        </h3>
        <p className="text-xl text-text mb-2">
          Diploma in Software Development
        </p>
        <p className="text-lg text-secondary italic">
          January 2022 - September 2024
        </p>
      </div>
    </section>
  )
}

export default Education
