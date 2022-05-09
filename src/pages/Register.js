import React from 'react'
import '../assets/styles/pages/register.css'

export default function Register() {
  return (
    <div className='reg-page'>
      <h3>Register</h3>
      <div className='reg-container'>
      <input type="text" placeholder='Frist Name' />
      <input type="text" placeholder='Last Name' />
      <input type="text" placeholder='Screen Name' />
      <input type="date" placeholder='Year of birth' />
      <input type="text" placeholder='School' />
      <input type="text" placeholder='User Name' />
      <input type="password" placeholder='Password' />
      <input type="password" placeholder='Repeat Password' />
      </div>
      <div className='reg-btn'>
        <button className='reg-btn-1'>Register me</button>
      </div>
      
    </div>
  )
}
