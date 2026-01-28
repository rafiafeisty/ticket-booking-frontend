import React, { useState, useEffect } from 'react';
import Footer from '../pages/Footer';
import Blurcircle from '../pages/Blurcircle.jsx';
import layout from '../assets/screenImage.svg';
import { Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import toast, { Toaster } from 'react-hot-toast';

import AOS from "aos";
import "aos/dist/aos.css";

const Seats = () => {
  const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seats, setSeats] = useState([]);
  const [time, settime] = useState(null);
  const { user } = useUser();
  const location = useLocation();
  const index = location.state?.index;

  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 8;

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://ticket-booking-backend-flame.vercel.app/show");
        const response = await data.json();
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const activeShow = show[index];
  const occupiedSeats = activeShow?.occupiedSeats || {};
  const movie = activeShow?.movie;
  const allShows = activeShow ? show.filter(s => s.movie === activeShow.movie) : [];

  const formatShowTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const toggleSeat = (seatId, isOccupied) => {
    if (!time) {
      toast.error("Select the Time first");
      return;
    }
    if (isOccupied) return;
    setSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const checkingout = async () => {
    if (!user) {
      toast.error("you must first login")
      return;
    }
    if (!time) {
      toast.error("please select time")
      return;
    }
    if (seats.length === 0) {
      toast.error("please select one seat")
      return;
    }

    const payload = {
      seats: seats,
      show: time._id,
      user: { name: user.fullName || user.firstName || "User", userId: user.id },
      totalPrice: seats.length * time.showPrice,
    };

    try {
      localStorage.setItem("pendingBooking", JSON.stringify(payload));

      const response = await fetch("https://ticket-booking-backend-flame.vercel.app/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create Stripe session");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Stripe checkout error:", error);
      toast.error("Checkout failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f84565]"></div>
      </div>
    );
  }

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative items-start px-4 mt-20">

        {/* Background Circle */}
        <div className="ml-auto w-[40%] md:w-[20%] inset-0 absolute -z-0 hidden md:block pointer-events-none">
          <Blurcircle />
        </div>

        {/* Show times section */}
        <div
          className="bg-[#f84565]/10 mt-20 w-full max-w-xs mx-auto lg:mx-0 p-6 border rounded-md border-[#f84565]/20"
          data-aos="fade-up"
        >
          {allShows.length > 0 ? (
            allShows.map((showItem, i) => {
              const isSelected = time?._id === showItem._id;
              return (
                <div
                  key={showItem._id}
                  onClick={() => settime(showItem)}
                  className={`text-xl text-white font-medium px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 mb-4 cursor-pointer
                    ${isSelected ? "bg-[#f84565]" : "hover:bg-[#f84565]/30"}`}
                  data-aos={!isSelected ? "zoom-in" : ""}
                  data-aos-delay={!isSelected ? i * 100 : 0}
                >
                  <Clock /> {formatShowTime(showItem.showDateTime)}
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 text-center">No showtimes available.</p>
          )}
        </div>

        {/* Seat selection */}
        <div className="w-full max-w-4xl mx-auto mt-8" data-aos="fade-up">
          <div className="text-xl text-white font-medium text-center mb-6">
            Select Your Seat
          </div>

          <div className="mb-6 flex justify-center">
            <img src={layout} alt="screen layout" className="w-full max-w-md" />
          </div>

          {/* SEAT GRID */}
          <div className="flex flex-col items-center gap-6 mb-10">
            {rows.slice(0, 2).map((row) => (
              <div key={row} className="flex items-center gap-3 w-full justify-center" data-aos="fade-up">
                <div className="flex gap-2 flex-wrap justify-center">
                  {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
                    const seatId = `${row}${seatIndex + 1}`;
                    const isOccupied = occupiedSeats[seatId];
                    const isSelected = seats.includes(seatId);

                    return (
                      <button
                        key={seatIndex}
                        disabled={!!isOccupied}
                        onClick={() => toggleSeat(seatId, isOccupied)}
                        className={`h-8 w-10 flex items-center justify-center rounded-md transition-colors
                          ${isOccupied ? 'bg-gray-500 cursor-not-allowed'
                            : isSelected ? 'bg-[#f84565] text-white'
                              : 'bg-[#f84565]/30 text-white hover:bg-[#f84565]/50'}`}
                      >
                        {seatId}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Remaining seat rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
            {[2, 4].map((startIndex) => (
              <div key={startIndex} className="flex flex-col gap-8 items-center">
                {rows.slice(startIndex, startIndex + 2).map((row) => (
                  <div key={row} className="flex gap-3 w-full justify-center" data-aos="fade-up">
                    <div className="flex gap-2 flex-wrap justify-center">
                      {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
                        const seatId = `${row}${seatIndex + 1}`;
                        const isOccupied = occupiedSeats[seatId];
                        const isSelected = seats.includes(seatId);

                        return (
                          <button
                            key={seatIndex}
                            disabled={!!isOccupied}
                            onClick={() => toggleSeat(seatId, isOccupied)}
                            className={`h-8 w-10 flex items-center justify-center rounded-md transition-colors
                              ${isOccupied ? 'bg-gray-500 cursor-not-allowed'
                                : isSelected ? 'bg-[#f84565] text-white'
                                  : 'bg-[#f84565]/30 text-white hover:bg-[#f84565]/50'}`}
                          >
                            {seatId}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="text-center mt-20" data-aos="fade-up">
        <button
          onClick={checkingout}
          className="py-3 px-6 bg-[#f84565] hover:bg-[#e43e5e] text-white rounded-full text-sm font-medium transition-colors duration-200"
        >
          CheckOut
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Seats;
