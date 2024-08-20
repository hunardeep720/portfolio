"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  let data = useRef([]);
  const [buttonOPtions, setButtonOptions] = useState("More");

  useEffect(() => {
    fetch('https://api.github.com/users/hunardeep720/repos')
      .then(response => response.json())
      .then(info => {data.current = info; setRepos(info.slice(-4));});
  }, []);
  const ButtonFunctions = () => {
    if (buttonOPtions === "More") {
      setRepos(data.current);
      setButtonOptions("Less");
    } else {
      setRepos(data.current.slice(0, 4));
      setButtonOptions("More");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto m-10 bg-black text-white pt-24 sm:pt-40 w-full">
      <h2 className="text-2xl font-extrabold sm:text-4xl">
        My GitHub Repositories
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-center 2xl:grid-cols-3">
        {repos.map(repo => (
          <div key={repo.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p>{repo.description}</p>
            <Link href={repo.html_url} target="_blank" className="text-blue-500">
              View Repository
            </Link>
          </div>
        ))}
        <button className='col-span-full 2xl:col-start-2 border rounded-lg p-4' onClick={ButtonFunctions}>{buttonOPtions}</button>
      </div>
    </div>
  );
}
