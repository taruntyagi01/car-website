import React from 'react'
import Bgvideo from '../../assets/front.mp4'

const Bg = () => {
  return (
     <video className='absolute top-0 left-0 w-full h-full object-cover'
        src={Bgvideo}
        autoPlay
        muted
        loop
        playsInline
        />
  )
}

export default Bg