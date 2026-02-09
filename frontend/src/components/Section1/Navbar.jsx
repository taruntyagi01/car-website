import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          Car<span className="text-orange-500">ty</span>
        </h1>

        {/* Search (desktop) */}
        <div className="hidden md:block relative w-[35%]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search by brand, model or type..."
            className="w-full pl-11 pr-4 py-2 rounded-full bg-white/10 text-white 
                       border border-white/20 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex gap-4">
          <button className="text-white/70 hover:text-white transition">
            Compare
          </button>
          <Link to="/Signin">
            <button className="bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-400 transition">
              Sign in
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black/80 backdrop-blur-xl">
          
          {/* Search (mobile) */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search cars..."
              className="w-full pl-11 pr-4 py-2 rounded-full bg-white/10 text-white 
                         border border-white/20 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Actions */}
          <button className="block w-full text-left text-white/80 hover:text-white transition">
            Compare
          </button>

          <Link to="/Signin">
            <button className="w-full bg-orange-500 text-black py-2 rounded-full font-semibold hover:bg-orange-400 transition">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
