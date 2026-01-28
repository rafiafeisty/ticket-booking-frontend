import React, { useEffect } from 'react';
import banner from '../assets/backgroundImage.png';
import marvel from "../assets/marvelLogo.svg";
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const navigate = useNavigate();
  
  const moviepage = () => {
    navigate('/movies');
    scrollTo(0, 0)
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover"
        data-aos="fade-in"
      />

      <div
        className="absolute inset-0 flex flex-col justify-center ml-6 sm:ml-10 md:ml-20 lg:ml-28 xl:ml-36 
        w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]"
        data-aos="fade-right"
      >

        {/* Marvel Logo */}
        <img
          src={marvel}
          alt="marvel"
          className="w-28 sm:w-36 md:w-40 lg:w-48"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        {/* Title */}
        <div
          className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold text-white leading-tight"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>Guardians</div>
          <div>of the Galaxy</div>
        </div>

        {/* Info Row */}
        <div
          className="text-white mt-3 sm:mt-4 font-medium flex flex-wrap 
          items-center gap-2 sm:gap-4 text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1"><Calendar size={16} /> <span>2018</span></div>
          <div className="flex items-center gap-1"><Clock size={16} /> <span>2h 8m</span></div>
        </div>

        {/* Description */}
        <p
          className="mt-4 sm:mt-6 text-white text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
          two people meet in London and try to stop a conspiracy.
        </p>

        {/* Button */}
        <div
          className="mt-5 sm:mt-6"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <button
            className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 
            text-sm sm:text-base text-white bg-[#f84565] hover:bg-[#e43e5e] rounded-full"
          >
            Explore Movies{" "}
            <ArrowRight size={18} onClick={moviepage} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Banner;
