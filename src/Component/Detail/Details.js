import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Banner from '../home/Banner'
import Scroll from '../home/Scroll'


export default function Details() {
  const [movie, setMovie] = useState([])
  const location = useLocation()
  const title = location.state.title
  const url = location.state.name

  useMemo(() => {
    fetch('https://netflix-backendv2.herokuapp.com/movie')
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].img, "ijii")
        setMovie(data)
      });
  }, [])

  return (
    <>
    <div className='bg-black'>
      <Banner title={title} url={url} />
      {
        movie.map((data) => (
          <Scroll title={data.title} cardData={data.img} />
          ))
        }
        </div>
    </>
  )
}
