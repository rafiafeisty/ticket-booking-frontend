import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Movies = ({ movie, ind }) => {
  const navigate = useNavigate();

  const detailing = (movie) => {
    navigate("/details", { state: { movie, ind } });
    scrollTo(0, 0);
  };

  const releaseYear = new Date(movie.release_date).getFullYear();
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const genreNames = movie.genres?.map(g => g.name).slice(0, 1).join(', ');

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div
      className="bg-slate-800 hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl flex flex-col items-center text-center p-3 w-64 h-auto mb-10 hover:cursor-pointer"
      onClick={() => detailing(movie)}
      data-aos="fade-up"
      data-aos-delay={ind * 100}  // stagger animation
    >
      <div className="h-[70%] w-full mb-3">
        <img
          src={movie.poster_path}
          alt={`${movie.title} poster`}
          className="rounded-lg h-full w-full object-cover"
        />
      </div>

      <p className="text-lg font-semibold text-white">{movie.title}</p>
      <p className="text-sm font-medium text-gray-300 mb-3">
        {releaseYear} | {genreNames} | {hours}h {minutes}m
      </p>

      <button className="py-2 px-5 bg-[#f84565] hover:bg-[#e43e5e] text-white rounded-full text-sm font-medium transition-colors">
        Buy Ticket
      </button>
    </div>
  );
};

export default Movies;
