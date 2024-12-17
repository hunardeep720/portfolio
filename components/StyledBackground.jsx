"use client";

import React, { useState, useEffect } from "react";

export default function StyledBackground() {
  const [binaryStreams, setBinaryStreams] = useState([]);

  // Generate binary streams only once on the client side
  useEffect(() => {
    const streams = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      top: `${-100 + Math.random() * 200}vh`,
      animationDuration: `${5 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: `${0.5 + Math.random() * 0.5}`,
      content: Array.from({ length: 100 })
        .map(() => (Math.random() > 0.5 ? "0" : "1"))
        .join(""),
    }));
    setBinaryStreams(streams);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {binaryStreams.map((stream, i) => (
        <div
          key={i}
          className="absolute font-mono text-gray-500 whitespace-nowrap animate-binaryFall"
          style={{
            left: stream.left,
            top: stream.top,
            animationDuration: stream.animationDuration,
            animationDelay: stream.animationDelay,
            opacity: stream.opacity,
          }}
        >
          <p>{stream.content}</p>
        </div>
      ))}

      {/* Keyframes for falling animation */}
      <style jsx>{`
        @keyframes binaryFall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-binaryFall {
          animation: binaryFall linear infinite;
        }
      `}</style>
    </div>
  );
}