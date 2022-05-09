import React from 'react'
import '../assets/styles/pages/login.css'

export default function Login() {
  return (
    
    <div className='container-login'>
      <h3>Login</h3>
      <div className='input-login'>
        <input type="text" placeholder='User Name' />
        <input type="password" placeholder='Password' />
      </div>
      <div className='btns-login'>
        
        <button className='register-btn-login'>Register</button>
        <button className='login-btn'>Login</button>
      </div>

    </div>
  )
}
