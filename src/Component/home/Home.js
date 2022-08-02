import React, { useEffect, useState } from 'react'
import Scroll from './Scroll'
import './home.css'
import Footer from '../fisrt/Footer'
import Banner from './Banner'
import fire from '../../firebase'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
    const [movie, setMovie] = useState([])
    const navigate = useNavigate()
    const authListner = () => {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user)
            fetch('https://netflix-backendv2.herokuapp.com/movie')
            .then((response) => response.json())
            .then((data) => {
                    setMovie(data)
                });
            } else {
                navigate('/login')
          }
        })
      }
    useEffect(() => {
        
        authListner()
    }, [])
    
    return (
        <>
            <div className='bg-black'>

                <Banner/>
                {
                    movie.map((data)=>(
                        <Scroll title={data.title} cardData={data.img} />
                    ))
                }
               
            <Footer/>
            </div>

        </>
    )
}
