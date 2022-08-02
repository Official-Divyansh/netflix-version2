import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../home/Navbar'
import Scroll from '../home/Scroll'
export default function List() {
    const [myList, setMyList] = useState([])
    const favList = useSelector((state)=> state)

    useEffect(() => {
        var filtered = favList.reduce((filtered, item) => {
         if( !filtered.some(filteredItem => JSON.stringify(filteredItem) == JSON.stringify(item)) )
           filtered.push(item)
         return filtered
       }, [])
     setMyList(filtered)
    }, [favList])
    
  return (
    <div>
        <Navbar />
        <h1 className='text-white font-semibold text-2xl mt-10 ml-6'>My List</h1>
     <Scroll cardData={myList} />

    </div>
  )
}
