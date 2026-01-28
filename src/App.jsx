import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "./components/Home";
import Moviepage from "./components/Moviepage";
import Details from "./components/Details";
import Seats from "./components/Seats";
import MyBooking from "./components/MyBooking";
import Succes from "./components/Succes";
import Header from "./pages/Header";
import Header2 from "./pages/Header2";

const App = () => {
  const { user } = useUser();

  useEffect(() => {
    // Check localStorage for pending booking after redirect from Stripe
    const pendingBooking = JSON.parse(localStorage.getItem("pendingBooking"));
    const urlParams = new URLSearchParams(window.location.search);
    const paid = urlParams.get("paid");

    if (paid === "true" && pendingBooking) {
      const saveBooking = async () => {
        try {
          const res = await fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pendingBooking),
          });

          if (res.ok) {
            alert("Booking saved successfully!");
            localStorage.removeItem("pendingBooking");
          } else {
            alert("Failed to save booking after payment.");
          }
        } catch (err) {
          console.error("Error saving booking:", err);
          alert("Error saving booking.");
        }
      };
      saveBooking();
    }
  }, []);

  return (
    <>
      {/* Show Header depending on login */}
      {user ? <Header2 /> : <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviespage" element={<Moviepage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/booking" element={<Seats />} />
        <Route path="/mybooking" element={<MyBooking />} />
        <Route path="/success" element={<Succes />} />
      </Routes>
    </>
  );
};

export default App;
