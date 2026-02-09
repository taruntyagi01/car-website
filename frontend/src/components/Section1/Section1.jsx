import React from 'react'
import Navbar from './Navbar'
import Lefttext from './Lefttext'
import Righttext from './Righttext'
import 'remixicon/fonts/remixicon.css'


const Section1 = (props) => {


  return (
    <div className=' text-white bg-linear-to-b from-black via-gray-900 to-black'><Navbar/>
     <div className='py-7  px-18  h-[90vh] flex gap-10'>
        <Lefttext/>
        <Righttext users={props.users}/>
        </div>
    
    </div>
  )
}

export default Section1