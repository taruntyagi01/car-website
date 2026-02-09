import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Lefttext = () => {
  return (
    <div className='h-full w-1/3 justify-between flex flex-col  '>
    <div> 
    <div className='p-6 mb-7'>
    <div><h3 className='text-5xl font-bold  leading-[1.3] '>Compare <br /><span className=''>Choose</span><br />Drive...</h3>  <h6 className='font-bold text-sm text-gray-500 mb-9 '>( By their Countries )</h6></div>
   
    <p className='text-xl font-medium '>Search and compare cars from top brands worldwide.
      
     <span>Performance,price and features - All in one place</span>
      </p>

    </div>
    </div>
    <div className='text-9xl'><i className="ri-arrow-right-up-line"></i></div>
    </div>
    
  )
}

export default Lefttext