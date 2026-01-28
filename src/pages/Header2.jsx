import React from 'react'
import logo from '../assets/logo.svg';
import { Menu, TicketPlus, X } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user}=useUser();
  const {openSignIn}=useClerk();

  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between px-10 py-5 bg-transparent z-50">

      <div>
        <img src={logo} alt="logo" className="h-8" />
      </div>

      <nav className="hidden md:flex mt-5 space-x-8 backdrop-blur border border-gray-30/20 bg-black/70 bg-white/10 px-8 py-3 rounded-full">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/moviespage" className="hover:text-gray-300">Movie</Link>
        <Link to="/" className="hover:text-gray-300">Theatre</Link>
        <Link to="/" className="hover:text-gray-300">Releases</Link>
        <Link to="/mybooking" className="hover:text-gray-300">Bookings</Link>
      </nav>

      <div className="flex items-center space-x-5">
        { !user? (
          <button onClick={openSignIn} className="bg-[#f84565] hover:bg-[#e43e5e] rounded-full py-2 px-5 text-white font-medium hidden md:block">
          Login
        </button>
        ):(
          <UserButton/>
        )}

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-gray-700 py-6 flex flex-col items-center space-y-6 md:hidden">
          <Link to="/" className="hover:text-gray-300 text-white">Home</Link>
          <Link to="/moviespage" className="hover:text-gray-300 text-white">Movie</Link>
          <Link to="/" className="hover:text-gray-300 text-white">Theatre</Link>
          <Link to="/" className="hover:text-gray-300 text-white">Releases</Link>
          <button className="bg-[#f84565] hover:bg-[#e43e5e] rounded-full py-2 px-6 text-white font-medium">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header2
