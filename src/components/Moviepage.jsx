import React from 'react'
import Movies from '../pages/Movies.jsx'
import Footer from '../pages/Footer'
import { useEffect } from 'react'
import { useState } from 'react'


const Moviepage = () => {
  const [movie, setmovie] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://ticket-booking-backend-flame.vercel.app/movie")
      const response = await data.json()
      setmovie(response.data)
    };
    fetchdata()
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-40 m-auto w-[70%]">
        {movie.map((show, index) => {
          return <Movies key={show._id} movie={show} ind={index} />
        })}
      </div>
      <Footer />
    </>
  )
}

export default Moviepage
