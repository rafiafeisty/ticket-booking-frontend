// Success.jsx
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Succes = () => {
  const [searchParams] = useSearchParams();
  const paid = searchParams.get("paid");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">

      <div data-aos="fade-up" className="text-center">
        {paid === "true" ? (
          <h1 className="text-3xl font-bold">Payment Successful!</h1>
        ) : (
          <h1 className="text-3xl font-bold">Payment Cancelled</h1>
        )}
        <p className="mt-4 text-lg opacity-80">
          Thank you for booking your tickets.
        </p>
      </div>

    </div>
  );
};

export default Succes;
