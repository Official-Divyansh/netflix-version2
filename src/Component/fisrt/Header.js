import React from 'react'

import './heder.css'
import Section from './Section'
import Footer from './Footer'
import Nav from './Nav'
export default function () {
    return (
        <div>
            <div className='h-screen w-[100%] overflow-hidden flex items-center justify-center'
                id='bg_image'
            >
              <Nav login={true}/>
                <div className='absolute w-[100%] h-screen bg-black opacity-[.4] z-10'></div>
                <div className='absolute z-20 w-[100%] flex items-center justify-center flex-col mt-20'>
                    <h1 className='text-white 
                    font-bold text-4xl
                    sm:text-5xl md:text-6xl text-center '>Unlimited movies, TV
                    <br></br>	&nbsp;	&nbsp; shows and more.
                    </h1>
                    <h1
                    className='text-white
                    font-normal
                    sm:text-xl md:text-2xl text-2xl text-center '>
                        Watch anywhere. Cancel anytime.
                        <br></br>
                    </h1>
                    <h1
                    className='text-white
                    sm:text-lg md:text-xl text-md text-center '>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h1>
                    <div className='mt-10 flex items-center justify-center '>
                    <input type="text" placeholder="Email address" id='input'  />
               <button className="bg-red-600 text-white font-bold border-none inline-block"><h1>Get Started  </h1></button>
                    </div>
                </div>
            </div>
            
            <Section text='Enjoy on your TV' subtext='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' />
            <Section text='Download your shows to watch' subtext='Save your favourites easily and always have something to watch.'
            img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' right={true} />
            <Section text='Watch everywhere.' subtext='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
            img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' />

            <Section text='Create profiles for children.' subtext='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' 
            img='https://occ-0-2482-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420'
            right={true}/>
            <Footer />
           
        </div>
    )
}
