import React from 'react'
import Mybookings from '../pages/Mybookings'
import Footer from '../pages/Footer'
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useState } from 'react';


const MyBooking = () => {
    const { user } = useUser();
    const [booking, setbooking] = useState([])
    useEffect(() => {
        if (!user) return; // wait for user
        const fetchingdata = async () => {
            const userID = user.id;
            const data = await fetch(`https://ticket-booking-backend-two.vercel.app/booking?userId=${userID}`);
            const response = await data.json();
            setbooking(response.exist || []);
        };
        fetchingdata();
    }, [user]);

    return (
        <>
            <div className='w-[80%] grid grid-cols-1 items-center mt-28 place-items-center'>
                {booking.map((booking) => {
                    return <Mybookings key={booking._id} booking={booking}></Mybookings >
                })}
            </div>
            <Footer></Footer>
        </>
    )
}

export default MyBooking
