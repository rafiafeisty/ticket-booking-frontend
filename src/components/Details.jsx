import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';
import Movies from '../pages/Movies.jsx';
import Blurcircle from '../pages/Blurcircle.jsx';
import { useUser } from '@clerk/clerk-react';
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from 'react-hot-toast';


const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();

  const [cast, setCast] = useState([]);
  const [time, setTime] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [castRes, timeRes, movieRes] = await Promise.all([
          fetch("https://ticket-booking-backend-flame.vercel.app/cast"),
          fetch("https://ticket-booking-backend-flame.vercel.app/time"),
          fetch("https://ticket-booking-backend-flame.vercel.app/movie")
        ]);

        const castData = await castRes.json();
        const timeData = await timeRes.json();
        const movieData = await movieRes.json();

        setCast(castData.data);
        setTime(timeData.data);
        setMovie2(movieData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const index = location.state?.ind;
  const movie = movie2[index];

  const booking = () => {
    if (!user) {
      toast.error("Please login first!");
    }
    else if (!selectedDate) {
      toast.error("Please select a day!");
    } else {
      navigate("/booking", { state: { index, date: selectedDate } });
      scrollTo(0, 0);
      toast.success("Proceeding to booking!");
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f84565]"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center text-white mt-20 text-xl">
        <p>No movie data found.</p>
      </div>
    );
  }

  const releaseYear = new Date(movie.release_date).getFullYear();
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const genreNames = movie.genres?.map(g => g.name).join(', ');

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e1e1e',
            color: '#fff',
            fontWeight: '500',
          },
          success: {
            duration: 3000,
            icon: '✅',
          },
          error: {
            duration: 4000,
            icon: '⚠️',
          },
        }}
      />
      {/* Movie Details Section */}
      <section
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 mt-36 px-6 text-white"
        data-aos="fade-up"
      >
        <div
          className="flex-shrink-0 w-full sm:w-[60%] md:w-[40%] lg:w-[25%]"
          data-aos="fade-right"
        >
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-full rounded-2xl shadow-lg object-cover h-[500px]"
          />
        </div>

        <div
          className="w-full lg:w-[50%] space-y-4 text-center lg:text-left"
          data-aos="fade-left"
        >
          <p className="text-[#f84565] text-sm uppercase tracking-wide">English</p>
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <div className="flex justify-center lg:justify-start items-center gap-2 text-gray-300">
            <span className="text-yellow-400 text-lg">★</span>
            <span>{movie.vote_average}</span>
          </div>

          <p className="text-gray-400 leading-relaxed">{movie.overview}</p>

          <div className="text-sm text-gray-300">
            {releaseYear} | {genreNames} | {hours}h {minutes}m
          </div>

          <button
            className="py-2 px-6 bg-[#f84565] hover:bg-[#e43e5e] text-white rounded-full text-sm font-medium transition-colors duration-200"
            onClick={booking}
          >
            Buy Ticket
          </button>
        </div>
      </section>

      {/* Top Cast Section */}
      <section className="mt-16 px-6">
        <h2
          className="text-xl text-slate-300 font-semibold mb-8 text-center lg:text-left"
          data-aos="fade-up"
        >
          Top Cast
        </h2>

        <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide overflow-scroll">
          {cast.map((castItem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white flex-shrink-0 w-[90px]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={castItem.profile_path}
                alt={castItem.name}
                className="rounded-full object-cover w-[80px] h-[80px] shadow-md border-2 border-[#f84565]"
              />
              <p className="mt-3 text-sm font-medium text-gray-200 text-center">
                {castItem.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Choose Dates Section */}
      <section data-aos="fade-up">
        <div className="relative ml-auto">
          <div className="ml-auto w-[15%] mr-auto inset-0 absolute -z-0">
            <Blurcircle />
          </div>
        </div>

        <div
          className="p-9 bg-[#f84565]/10 border-[#f84565]/20 border w-[70%] m-auto mt-20 rounded-2xl"
          data-aos="zoom-in"
        >
          <div className="text-xl text-[#f84565] font-semibold mb-6">Choose Dates</div>

          <div className="flex gap-5 items-center justify-center flex-wrap">
            {Object.keys(time).map((dateKey, i) => {
              const date = new Date(dateKey);
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "long" });
              const isSelected = selectedDate === dateKey;

              return (
                <button
                  key={dateKey}
                  data-aos={!isSelected ? "fade-up" : ""}
                  data-aos-delay={!isSelected ? i * 100 : 0}
                  onClick={() => setSelectedDate(dateKey)}
                  className={`border p-5 rounded-xl cursor-pointer text-center transition-all duration-300
                    ${isSelected
                      ? 'bg-[#f84565]/70 border-[#f84565]'
                      : 'bg-[#2A2A2A]/60 border-[#f84565]/30 hover:bg-[#f84565]/20 hover:border-[#f84565]/60 text-white'
                    }`}
                >
                  <p className="text-2xl font-bold">{day}</p>
                  <p className="text-sm text-gray-300">{month}</p>
                </button>
              );
            })}

            <div className="ml-auto mr-10">
              <button
                className="py-3 px-6 bg-[#f84565] hover:bg-[#e43e5e] text-white rounded-full text-sm font-medium transition-colors duration-200"
                onClick={booking}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="mt-20 px-6" data-aos="fade-up">
        <h2 className="text-xl text-slate-300 font-semibold mb-10 text-center lg:text-left">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 m-auto w-full md:w-[80%] lg:w-[70%]">
          {movie2
            .filter((m) => m._id !== movie._id)
            .slice(0, 4)
            .map((showItem, index) => (
              <div data-aos="fade-up" data-aos-delay={index * 150}>
                <Movies key={showItem._id} movie={showItem} ind={index} />
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Details;
