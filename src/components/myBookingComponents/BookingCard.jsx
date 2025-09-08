import React from 'react';

const BookingCard = ({ booking }) => {
    const { eventName, date, image, tickets } = booking;
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
                <form className="space-y-2">
                    {/* Rating Input */}
                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Rating (Out of 5)</span>
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            name="rating"
                            // value={rating}
                            // onChange={(e) => setRating(e.target.value)}
                            required
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    {/* Comment Textarea */}
                    <div>
                        <label className="label">
                            <span className="label-text text-sm">Comment</span>
                        </label>
                        <textarea
                            name="comment"
                            // value={comment}
                            // onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your feedback..."
                            required
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Submit Review */}
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