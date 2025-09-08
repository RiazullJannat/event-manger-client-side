import React, { useEffect, useState } from 'react';
import EventCard from '../eventComponents/EventCard'
const FeaturedEvent = () => {
    const [featuredEvent, setFeaturedEvent] = useState([]);

    useEffect(() => {
        fetch('https://event-manager-server-kappa.vercel.app/featured-event')
            .then(res => res.json())
            .then(data => setFeaturedEvent(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-10">
                🌟 Featured Events
            </h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {featuredEvent.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedEvent;