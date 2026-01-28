import React, { useState } from 'react'
import Blurcircle from './Blurcircle'
import Movies from './Movies'
import { useEffect } from 'react'

const Nowshowing = () => {
  const [visible, setvisible] = useState(4);
  const [movie, setmovie] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://ticket-booking-backend-flame.vercel.app/movie")
      const response = await data.json()
      setmovie(response.data)
    };
    fetchdata()
  }, [])
  const shormore = () => {
    setvisible((prev) => prev + 4)
  }
  return (
    <>
      <div className='relative ml-auto'>
        <div className='ml-auto w-[15%] mr-auto inset-0 absolute -z-0'><Blurcircle /></div>
      </div>
      <div className='z-10 relative'>
        <div className='mt-8 text-gray-400 ml-8 text-lg font-medium mb-7'>
          <div>Now Showing</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-12 m-auto w-[70%]">
          {movie.slice(0, visible).map((show, index) => {
            return (
              <Movies key={show._id} movie={show} ind={index} />
            )
          })}
        </div>
      </div>
      {visible < movie.length && (
        <div className='w-[10%] m-auto mt-7'>
          <button onClick={shormore} className="py-3 px-7 bg-[#f84565] hover:bg-[#e43e5e] text-white rounded-full text-sm font-medium transition-colors">
            Show More
          </button>
        </div>
      )}
    </>
  )
}

export default Nowshowing
