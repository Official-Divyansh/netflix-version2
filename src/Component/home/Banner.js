import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar'

export default function Banner({ title, url }) {
    const navigate = useNavigate()

    

    const container = {
        backgroundImage: `url("https://occ-0-116-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVJ90MJX5sJq91gaCT_zrgmj7Tpl3Fxjr87kNobqy9Z2eow8Eiqt69hZB8OeYE06RMJhW3irEKean49EVThD7BpA--7R6APVGGFZ.jpg?r=f10")`,
        backgroundRepeat : 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    const wrapper = {
        backgroundImage: `url("${url}")`,
        backgroundRepeat : 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const favList = useSelector((state) => state)
    const dispatch = useDispatch()
    const AddToList = () => {
        // id: favList[favList.length -1].id + 1,
        const data = {
            img: url,
            name: title
        }
        dispatch({ type: "ADD_CONTACT", payload: data })
        navigate('/MyList')
    }
    return (
        <div >

          <Navbar/>

            <div className='relative h-[45vh] sm:h-[70vh]  w-[100%] overflow-hidden z-10'  style={url? wrapper : container}>
                <div className='w-[100%] h-[80vh] absolute  bg-gradient-to-t from-[rgba(0,0,0,.9)] to-transparent-500 z-40 '></div>
                {
                    title ? (
                        <div className='absolute sm:left-[10%]  top-[30%] left-[5%] z-50 sm:h-[100%] overflow-hidden'>
                            <h1 className='text-white text-xl sm:text-4xl font-semibold lg:text-6xl'>{title.toUpperCase()}</h1>
                            <p className=' text-green-300 text-xs sm:text-md md:text-base mt-2 mb-3' id='glow'>94% liked | 2022</p>
                            <button className='bg-red-500 rounded-md !pt-1 !pb-1 
            sm:!pt-2 sm:!pb-2 sm:text-sm text-white text-xs mr-2 !pl-8 !pr-8'>Play</button>

                            <button className='bg-gray-500 rounded-md !pt-1 !pb-1 
                    sm:!pt-2 sm:!pb-2 sm:text-sm text-white text-xs' onClick={AddToList}>
                       +MyList
                        </button>
                        </div>) :
                        <div className='absolute w-[40%] md:w-[30%] sm:left-[10%] top-[35%] md:top-[25%] sm:top-[30%]  left-[10%] z-50 sm:h-[100%]  overflow-hidden'>
                            <h1 className='text-white font-thin sm:text-3xl md:text-4xl  '>LOST IN SPACE</h1>
                            <p className=' text-green-300 text-xs sm:text-md md:text-base' id='glow'>94% liked | 2022</p>
                            <p className=' hidden sm:block text-white font-light text-[10px] sm:text-xs md:text-base text-ellipsis'>The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.science and magic, which made them superhuman.</p>
                        </div>
                }

                {/* <img src={url ? url : 'https://occ-0-116-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVJ90MJX5sJq91gaCT_zrgmj7Tpl3Fxjr87kNobqy9Z2eow8Eiqt69hZB8OeYE06RMJhW3irEKean49EVThD7BpA--7R6APVGGFZ.jpg?r=f10'} width='100%' /> */}
            </div>

        </div>
    )
}
