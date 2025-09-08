import { useEffect, useState } from "react";
import Event from "../eventComponents/Event";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            });
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                events.map(event=><Event key={event._id} event={event}></Event>)
            }
        </div>
    );
};

export default Events;