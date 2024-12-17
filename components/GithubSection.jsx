"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function GitHubSection() {
  const [repos, setRepos] = useState([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/hunardeep720/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  const displayedRepos = showAll ? repos : repos.slice(0, 4)

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-heading">
        My GitHub Repositories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayedRepos.map(repo => (
          <div key={repo.id} className="bg-lightBackground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">{repo.name}</h3>
            <p className="text-text mb-4">{repo.description}</p>
            <Link 
              href={repo.html_url} 
              target="_blank" 
              className="text-primary hover:text-accent transition-colors"
            >
              View Repository
            </Link>
          </div>
        ))}
      </div>
      {repos.length > 4 && (
        <button 
          className="mt-8 bg-primary hover:bg-primary/80 text-background font-bold py-2 px-4 rounded transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  )
}

