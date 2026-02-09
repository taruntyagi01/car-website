import React from 'react'
import Bg from './Bg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    
      
      <div className='relative h-screen w-full overflow-hidden'>
        <Bg/>
      <div className='absolute inset-0 bg-black/50'></div>
      
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-black text-center'>
        <h1 className='text-5xl font-bold mb-4'>Find Your Dream Car</h1>
        <p className='text-lg mb-6'> Luxury . Performance . Passion</p>
        <Link to="/section1"><button className='bg-amber-100 hover:bg-amber-200 px-6 py-3 rounded-lg '>Explore Cars</button></Link>

      </div>
    </div>
  )
}

export default Home