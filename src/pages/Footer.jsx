import React from 'react'
import logo from '../assets/logo.svg'
import google from '../assets/googlePlay.svg'
import playstore from '../assets/appStore.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 px-6 sm:px-10 lg:px-20 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, autem ut
            necessitatibus ducimus hic sunt odio.
          </p>
          <div className="flex gap-5 mt-2 flex-wrap">
            <img src={google} alt="google" className="h-10 w-auto" />
            <img src={playstore} alt="appstore" className="h-10 w-auto" />
          </div>
        </div>

        {/* Right Section */}
        <div className="sm:ml-auto">
          <div className="text-xl sm:text-2xl font-semibold mb-5 text-[#f84565]">
            Quick Links
          </div>
          <ul className="list-none space-y-3 text-gray-300 text-sm sm:text-base">
            <li><a href="/" className="hover:text-[#f84565] transition">Home</a></li>
            <li><a href="/movies" className="hover:text-[#f84565] transition">Movies</a></li>
            <li><a href="/" className="hover:text-[#f84565] transition">Trailers</a></li>
            <li><a href="/" className="hover:text-[#f84565] transition">Releases</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-full sm:w-[80%] mx-auto h-[1px] bg-slate-700"></div>
        <p className="text-slate-400 text-center text-sm mt-4">
          Copyright 2025 © GreatStack. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
