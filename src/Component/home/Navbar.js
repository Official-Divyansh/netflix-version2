import React from 'react'
import Logo from '../fisrt/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import fire from '../../firebase'
export default function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        fire.auth().signOut();
        navigate('/login')
    };

  return (
    <nav className=' bg-black flex items-center justify-between h-[10vh]'>
                <ul className='flex items-center text-white ml-8'>
                 
                    <img src={Logo} className='w-[20%] sm:w-[10%] cursor-pointer ' onClick={()=> navigate("/")} />
              
                    <Link to='/Home'>
                        <li className='ml-4 hidden sm:inline'>Home</li>
                    </Link>
                    <li className='ml-4 hidden sm:inline'>Trending</li>
                    <li className='ml-4 hidden sm:inline'>Movies</li>
                    <Link to='/MyList'>
                        <li className='hidden ml-4  sm:inline'>My List</li>
                    </Link>
                </ul>

                <div className='absolute flex items-center justify-center w-[15vh] sm:w-[20vw] text-sm text-white right-0 h-6 lg:h-10  rounded-md bg-red-500 mr-10 cursor-pointer' onClick={handleLogout} >
                   
                    <h1>
                        sign out
                    </h1>
                </div>
            </nav>
  )
}
