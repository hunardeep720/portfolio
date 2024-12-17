"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The BRDGE",
    description:
      "A platform connecting chefs directly with customers by allowing chefs to list and sell their meals according to customizable schedules.",
    technologies: "React Native (Expo CLI), Firebase",
    link: "https://thebrdge.com/",
    github: null, // No GitHub link for this project
    features: [
      "Designed and developed full-stack application features",
      "Collaborated on project planning, time estimates, and design mock approvals",
      "Implemented and tested features for both mobile and web interfaces",
      "Handled end-to-end deployment and ongoing application updates",
    ],
    additionalDetails: "Position: Developer (Part-Time) | Duration: August 2024 - Present",
  },
  {
    title: "Student Scoops",
    description: "A platform that reduces food waste by offering discounted surplus food to students.",
    technologies: "Next.js, Firebase, Google Maps API, Nodemailer",
    link: "https://studentscoops.vercel.app/",
    github: "https://github.com/Abdelmouzahir/studentscoops.git",
    features: [
      "Admins have full control over students, vendors, and employees",
      "Only eligible students are permitted to register",
      "Real-time updates for newly uploaded food items",
      "Responsive design adjusts based on screen size and scrolling behavior",
      "Tracks and stores order history for both students and vendors",
    ],
  },
  {
    title: "Deal Hives",
    description: "An e-commerce platform developed using Next.js with Firebase authentication and Firestore Database.",
    technologies: "Next.js, Firebase, Real-Time Amazon Data (Rapid API)",
    link: "https://deal-hives.vercel.app/",
    github: "https://github.com/hunardeep720/dealHives.git",
    features: [
      "Secure User Authentication",
      "Personalized Experience with user-specific carts",
      "Seamless Product Management",
      "User Profile Management",
      "Access Control for signed-in users",
      "Responsive Design across all devices",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-heading">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-lightBackground rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
            <p className="text-text mb-4">{project.description}</p>
            <p className="text-secondary mb-4">Technologies: {project.technologies}</p>
            {project.additionalDetails && (
              <p className="text-text italic mb-4">{project.additionalDetails}</p>
            )}
            <ul className="list-disc list-inside mb-4 text-text">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex space-x-4">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-primary hover:bg-primary/80 text-background font-bold py-2 px-4 rounded transition-colors"
                >
                  Visit Project
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="bg-lightBackground hover:bg-lightBackground/80 text-primary border border-primary font-bold py-2 px-4 rounded transition-colors"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}