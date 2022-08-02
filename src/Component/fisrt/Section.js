import React from 'react'

export default function Section({ text, subtext, img, right }) {
    return (
        <div className='h-[80vh]  flex items-center justify-center bg-black mt-2  flex-col md:flex-row md:justify-around' >
            {
                right ? (
                    <>
                        <img src={img ? img : 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'} className='w-[70%] sm:w-[50%] md:w-[40%]  ' />
                         <div className='text-white basis-[30%] sm:basis-[50%] '>
                            <h1 className='font-bold text-4xl sm:mt-10 md:text-5xl text-center '>{text}</h1>
                            <h1 className='font-thin text-md mt-5 text-center  w-[80%] m-auto md:text-xl'>{subtext}</h1>
                        </div>
                    
                    </>
                ) : (
                    <>
                        <div className='text-white basis-[30%] sm:basis-[50%] '>
                            <h1 className='font-bold text-4xl sm:mt-10 md:text-5xl text-center '>{text}</h1>
                            <h1 className='font-thin text-md mt-5 text-center  w-[80%] m-auto md:text-xl'>{subtext}</h1>
                        </div>
                        <img src={img ? img : 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'} className='w-[70%] sm:w-[50%] md:w-[40%]  ' />
                    </>
                )
            } 

        </div>
    )
}
