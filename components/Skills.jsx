"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

function Skills({ frontend, backend }) {
  const [activeTab, setActiveTab] = useState("frontend")

  const tabVariants = {
    active: { backgroundColor: "#64FFDA", color: "#0A192F" },
    inactive: { backgroundColor: "transparent", color: "#64FFDA" },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-heading">Skills</h2>
      <div className="bg-lightBackground rounded-lg p-6 shadow-lg">
        <div className="flex mb-6">
          <motion.button
            variants={tabVariants}
            animate={activeTab === "frontend" ? "active" : "inactive"}
            onClick={() => setActiveTab("frontend")}
            className="flex-1 py-2 px-4 rounded-l-lg font-semibold"
          >
            Frontend
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={activeTab === "backend" ? "active" : "inactive"}
            onClick={() => setActiveTab("backend")}
            className="flex-1 py-2 px-4 rounded-r-lg font-semibold"
          >
            Backend
          </motion.button>
        </div>
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {(activeTab === "frontend" ? frontend : backend).map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillVariants}
              className="bg-background p-4 rounded-lg flex justify-between items-center"
            >
              <span className="text-primary">{skill.name}</span>
              <span className="text-secondary">{skill.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

