const AddEvent = () => {
    const imageHoistingKey = import.meta.env.VITE_IMAGE_HOISTING_KEY;
    const imageHosingUrl = `https://api.imgbb.com/1/upload?key=${imageHoistingKey}`;
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        const imgData = new FormData();
        imgData.append('image', formData.image);
        fetch(imageHosingUrl, {
            method: 'POST',
            body: imgData,
        })
            .then(res => res.json())
            .then(data => {
                formData.image = data.data.display_url;
                fetch("http://localhost:5000/add-event",
                    {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("success...");
                            e.target.reset();
                        }
                    })
                    .catch(error => console.log(error.message));
            });

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
                        <select default="default" name="category" className="select select-bordered w-full" required>
                            <option disabled value={"default"}>Choose category</option>
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
                    {/* Registration Fee */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Registration Fee (TK)</span>
                        </label>
                        <input
                            type="number"
                            name="fee"
                            className="input input-bordered w-full"
                            min="0"
                            step="0.01"
                            placeholder="e.g. 500"
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