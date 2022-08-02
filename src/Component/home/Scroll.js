import React, { useEffect } from 'react'
import MediumCard from './MediumCard'
// import { Link } from 'react-router-dom'
export default function Scroll({cardData,title}) {
 
  return (
    <div className='ml-2'>
        <h1 className='text-white mt-4 font-semibold text-2xl'>{title}</h1>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide overflow-y-hidden mt-10 '>

            {
                cardData.map((item, index)=>{
                    return  <MediumCard
                    key={index}
                    img={item.img}
                    title={item.name}
                    Detail={item.DetailImg} 
                     />
                })
            }
            </div>
    </div>
  )
}
