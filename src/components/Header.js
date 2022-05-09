import React from 'react'
import '../assets/styles/components/header.css'
import Livarimg from '../assets/imgs/Livar.jpg'

export default function Header() {
  return (
    <header className='container'>
        <div className='content'>
            <div className='img-btn'>
                <img src={Livarimg} className='img-logo' alt="logo" />
                <button className='btn btn-home'>Home</button>
            </div>
            
            <div className='btns'>
                <button className='btn'>Login</button>
                <button className='btn'>Register</button>
            </div>
        </div>
    </header>
  )
}
