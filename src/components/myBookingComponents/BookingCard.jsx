import React from 'react';

const BookingCard = ({ booking }) => {
    const { eventName, date, image, tickets } = booking;
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            rating: e.target.rating.value,
            review: e.target.review.value,
        }
        fetch("http://localhost:5000/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('success');
                    e.target.reset();
                }
            });
    }
    return (
        <div className="card card-side bg-base-100 shadow-md border hover:shadow-lg transition duration-300 ">

            <div className="card-body p-4 flex flex-col justify-between w-full">
                <figure>
                    <img
                        src={image}
                        alt={eventName}
                        className="h-full object-cover"
                    />
                </figure>
                {/* Booking Info */}
                <div>
                    <h2 className="card-title text-xl font-semibold">{eventName}</h2>
                    <p className="text-sm text-gray-600">
                        📅 {new Date(date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-700">
                        🎫 Booked Tickets: <strong>{tickets}</strong>
                    </p>
                </div>

                {/* Cancel Button */}
                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-sm btn-error text-white">
                        Cancel Booking
                    </button>
                </div>
            </div>
            {/* Add Review Section */}
            <div className="mt-4 border-t pt-4 w-[50%]">
                <h3 className="text-base font-semibold mb-2">Add a Review</h3>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Rating (Out of 5)</span>
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            name="rating"
                            required
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Comment</span>
                        </label>
                        <textarea
                            name="review" // ✅ Fixed from comment → review
                            placeholder="Write your feedback..."
                            required
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    <div className="text-right">
                        <button type="submit" className="btn btn-sm btn-success">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingCard;