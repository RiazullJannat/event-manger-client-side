const AddEvent = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow-md mt-5">
                <h2 className="text-2xl font-bold mb-4 text-center">Add New Event</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Event Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Event Name</span>
                        </label>
                        <input
                            type="text"
                            name="eventName"
                            className="input input-bordered w-full"
                            placeholder="e.g. React Conference 2024"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            placeholder="e.g. Dhaka, Bangladesh"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <select name="category" className="select select-bordered w-full" required>
                            <option disabled selected>Choose category</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Conference">Conference</option>
                            <option value="Meetup">Meetup</option>
                            <option value="Webinar">Webinar</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write event details..."
                            required
                        ></textarea>
                    </div>

                    {/* Number of Seats */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Number of Seats</span>
                        </label>
                        <input
                            type="number"
                            name="seats"
                            className="input input-bordered w-full"
                            min="1"
                            placeholder="Enter number of seats"
                            required
                        />
                    </div>

                    {/* Event Image */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Upload Event Image</span>
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;