import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Mybookings = ({ booking }) => {
  const movie = booking.show.movie;

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  const formatting = (datestring) => {
    const date = new Date(datestring);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    return `${day} ${month} ${year} ● ${time}`;
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div
      className="w-full sm:w-[90%] md:w-[80%] p-6 sm:p-8 bg-[#f84565]/10 border-[#f84565]/20 border rounded-lg mx-auto my-5"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">

        {/* Movie Poster */}
        <img
          className="w-full sm:w-[200px] h-[170px] object-contain mx-auto sm:mx-0"
          src={movie.poster_path}
          alt="poster"
          data-aos="zoom-in"
          data-aos-delay="100"
        />

        {/* Movie Info */}
        <div
          className="text-center sm:text-left"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="font-bold text-xl sm:text-2xl">{movie.title}</h1>
          <p className="text-white font-medium mt-2">{hours} hours {minutes} minutes</p>
          <p className="mt-4 sm:mt-10">{formatting(booking.bookingDate)}</p>
        </div>

        {/* Booking Details */}
        <div
          className="text-center sm:text-left mt-4 sm:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">₹ {booking.totalPrice}</h1>
          <p className="text-white font-sans text-sm">
            Total Tickets: <span className="font-bold">{booking.seats.length}</span>
          </p>
          <p className="text-white font-sans text-sm mt-1">
            Seat Number: <span className="font-bold">{booking.seats.join(", ")}</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Mybookings;
