import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <div>
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 px-10 py-4 flex items-center justify-between">

  
  <h1 className="text-2xl font-bold text-white tracking-wide">
    Car<span className="text-orange-500">ty</span>
  </h1>

  <div className="relative sm:w-[35%] w-35">
    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      placeholder="Search by brand, model or type..."
      className="w-full pl-11 pr-4 py-2 rounded-full bg-white/10 text-white 
      border border-white/20 focus:ring-2 focus:ring-orange-500 outline-none"
    />
  </div>

  <div className="flex gap-4">
    <button className="text-white/70 hover:text-white">
      Compare
    </button>
    <Link to='/Signin'><button className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-400">
      Sign in
    </button></Link>
  </div>
</nav>
   </div>
  )
}

export default Navbar