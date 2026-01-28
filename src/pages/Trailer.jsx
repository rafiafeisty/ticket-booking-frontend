import React, { useEffect, useState } from 'react'
import { dummyTrailers } from '../assets/assets.js'
import ReactPlayer from 'react-player'
import Blurcircle from './Blurcircle.jsx'
import { CirclePlay } from 'lucide-react'
import AOS from "aos"
import "aos/dist/aos.css"

const Trailer = () => {
  const [trailer, settrailer] = useState(dummyTrailers[0])

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false
    });
  }, []);

  return (
    <>
      <div
        className='mt-8 text-xl font-medium text-gray-300 w-[90%] m-auto mb-10'
        data-aos="fade-right"
      >
        Trailer
      </div>

      <div className='relative ml-auto'>
        <div
          className='ml-auto w-[15%] mr-auto inset-0 absolute -z-0'
        >
          <Blurcircle />
        </div>
      </div>

      <div
        className='relative w-[90%] m-auto p-2'
        data-aos="fade-up"
      >
        <ReactPlayer
          url={trailer.videoUrl}
          controls={true}
          className='mx-auto max-w-full'
          width='960px'
          height='540px'
          data-aos="fade-up"
        />
      </div>

      <div className='flex flex-wrap gap-6 w-[60%] m-auto mt-5 justify-center'>
        {dummyTrailers.map((show, index) => (
          <div
            key={index}
            className='relative cursor-pointer'
            onClick={() => settrailer(show)}
            data-aos="fade-up"
            data-aos-delay={index * 150}   // Stagger effect
          >
            <img
              src={show.image}
              alt='trailer'
              className='w-[200px] h-auto rounded-md transition-transform duration-300 hover:scale-105'
            />

            <div className='absolute inset-0 flex items-center justify-center'>
              <CirclePlay className='text-white w-12 h-12 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]' />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Trailer
