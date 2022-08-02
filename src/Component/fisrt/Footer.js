import React from 'react'

export default function Footer({blur}) {
       const wrapper ={
              background: blur? 'rgba(0,0,0,.5)': 'black' ,
              width: blur? '100%': '',
             
       }
  return (
       <div className='mt-2 bg-black  px-32 py-14' style={wrapper}>
       <h1 className='mb-4 text-xs sm:text-sm text-gray-300'>Got a question? Call 000-800-040-1843</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10  text-gray-200 ">

        <div className="space-y-4 text-sm text-gray-300">
          
               <p>FAQ</p>
               <p>Media Center</p>
               {
                     !blur && 
                     (
                            <>
                   <p>ways of seeing</p>
                   <p>cookie preference</p>
                   <p>speed test</p>
                            </>
                   )
               }
          
        </div>
        <div className="space-y-4 text-sm text-gray-300">
         
               <p>Help Center</p>
               <p>Investor Relations</p>
               {
                     !blur && 
                     (
                            <>
                   <p>Terms of use</p>
                   <p>corporate Plus</p>
                   <p>legal notices</p>
                            </>
                   )
               }
          
        </div>
        <div className="space-y-4 text-sm text-gray-300">
      
               <p>account</p>
               <p>jobs</p>
               {
                     !blur && 
                     (
                            <>
                   <p>privacy</p>
                   <p>contact us</p>
                   <p>only on Netflix</p>
                            </>
                   )
               }
          
        </div>
        
       
    </div>
    
    </div>
  )
}
