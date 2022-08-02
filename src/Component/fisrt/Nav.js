import React from 'react'
import logo from './Logo.svg'
import './heder.css'
import { Link } from 'react-router-dom'
export default function Nav({login}) {
  return (
    <nav className='flex items-center justify-between absolute top-0 z-20 pl-10 '>
        <img src={logo} className='w-[25%] sm:w-[13%] ' />
        {
            login != false && 
            <Link to="/login">
            <button className=' text-white bg-red-600 mr-10 rounded-md' id='btn'>Sign in</button>
            </Link>
        }
            </nav>
  )
}
