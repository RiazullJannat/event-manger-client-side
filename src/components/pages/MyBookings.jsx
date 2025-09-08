import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "../myBookingComponents/BookingCard";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://event-manager-server-kappa.vercel.app/my-bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [user])
    console.log(bookings);
    return (
        <div>
            {
                bookings.map(booking =><BookingCard key={booking._id} booking={booking}></BookingCard>)
            }
        </div>
    );
};
export default MyBookings;