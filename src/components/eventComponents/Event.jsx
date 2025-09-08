import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';

const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch(`https://event-manager-server-kappa.vercel.app/events/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [id]);
    const {
        eventName,
        image,
        description,
        category,
        date,
        location,
        seats,
        fee
    } = event;
    return (
        <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-lg overflow-hidden mt-10 border">
            {/* Image */}
            <img src={image} alt={eventName} className="w-full h-60 object-cover" />

            <div className="p-6">
                {/* Title + Category badge */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{eventName}</h2>
                    <span className="badge badge-accent text-xs">{category}</span>
                </div>

                {/* Location & Date */}
                <p className="text-sm text-gray-600 mt-2">
                    📍 {location} | 📅 {new Date(date).toLocaleDateString()}
                </p>

                {/* Organizer Info */}
                <p className="mt-4 text-gray-700 text-sm">
                    <strong>Organizer:</strong> {category} Team
                </p>

                {/* Description */}
                <p className="mt-4 text-gray-800 text-sm">
                    <strong>Description:</strong> {description}
                </p>

                {/* Registration Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm">
                    <div>
                        <span className="font-medium">Available Seats:</span> {seats}
                    </div>
                    <div>
                        <span className="font-medium">Registration Fee:</span> ৳{fee}
                    </div>
                    <div>
                        <span className="font-medium">Registration Deadline:</span>{" "}
                        {date}
                    </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <NavLink to={`/events/${id}/register`} className="btn btn-primary w-full">Register Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Event;