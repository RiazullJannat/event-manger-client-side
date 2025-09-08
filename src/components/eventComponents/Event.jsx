const Event = ({ event }) => {
    console.log(event);
    const {
        eventName,
        image,
        date,
        location,
        seats,
        category,
    } = event;
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 cursor-pointer border">
            <figure>
                <img src={image} alt={eventName} className="w-full h-52 object-cover" />
            </figure>
            <div className="card-body">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl font-semibold">{eventName}</h2>
                    <div className="badge badge-secondary text-xs">{category}</div>
                </div>

                {/* Date & Location */}
                <p className="text-sm text-gray-500">
                    📅 {new Date(date).toLocaleDateString()} <br />
                    📍 {location}
                </p>

                {/* Seats */}
                <p className="text-sm mt-2">
                    🎫 <span className="font-medium">Available Seats:</span> {seats}
                </p>

                {/* Action Button */}
                <div className="card-actions mt-4 justify-end">
                    <button className="btn btn-sm btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Event;