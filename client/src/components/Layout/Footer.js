import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // <div className='bg-dark text-light p-3'>
    // <div className='bg-brown text-light p-3'>
    <div className='footer'>

      <h4 className='text-center'>All rights reserved &copy; abhay</h4>
      <p className='text-center mt-3'>
        <Link to="/about" >About us</Link>
        <Link to="/contact" >Contact</Link>
        {/* <Link to="/policy" >PrivacyPolicy</Link> */}
      </p>

    </div>
  )
}
