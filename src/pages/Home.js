import React from 'react'
import '../assets/styles/pages/home.css'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-content'>
        <div className='page-title'>
          <h3>Home</h3>
          <p>Welcome to Mentalizer</p>
        </div>
        
        <div className='youtube-container'>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9ao4FEaDGhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Video: intro Mentalizer</p>
        
        </div>
        
        <div className='about'>
          <p>Text om Mentalizer</p>

        </div>
      </div>
    </div>
  )
}
