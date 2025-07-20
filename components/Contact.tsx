"use client";

import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-600">
          Get in Touch
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          I'm always open to new opportunities and collaborations.
          <br />
          Feel free to reach out using the form below or email me directly.
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded-lg border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded-lg border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="px-4 py-2 rounded-lg border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-yellow-500 transition-colors border border-yellow-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 border border-gray-200 text-yellow-600 font-semibold">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        )}
        <div className="mt-8 text-gray-700">
          Or email me directly:{" "}
          <a
            href="mailto:dhillonhunar@gmail.com"
            className="text-blue-600 underline hover:text-yellow-600 transition-colors"
          >
            dhillonhunar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
