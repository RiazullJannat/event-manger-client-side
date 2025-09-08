import { useEffect, useState } from "react";
import EventCard from "../eventComponents/EventCard";
import { useParams } from "react-router";

const Events = () => {
    const [events, setEvents] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        fetch(`https://event-manager-server-kappa.vercel.app/events?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            });
    }, [category])
    if(events.length == 0)
        return(
    <div>
        <h2>No data found in this category....</h2>
    </div>
    )
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                events.map(event => <EventCard key={event._id} event={event}></EventCard>)
            }
        </div>
    );
};
export default Events;