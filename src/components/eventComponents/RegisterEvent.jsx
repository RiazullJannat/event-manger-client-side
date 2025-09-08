import { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const RegisterEvent = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        formData.eventId = id;
        fetch("http://localhost:5000/event/registration", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId)
                    console.log('success');
                e.target.reset();
            });
    }
    return (
        <div className="max-w-xl mx-auto  p-6 rounded shadow-md mt-10 border">
            <h2 className="text-2xl font-bold mb-6 text-center">Event Registration</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
                {/* Name */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName || ""}
                        readOnly // Making it auto-filled and read-only
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email || ""}
                        readOnly
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Phone Number</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Number of Tickets */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Number of Tickets</span>
                    </label>
                    <input
                        type="number"
                        name="tickets"
                        min={1}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Payment Method - Optional */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Payment Method (Optional)</span>
                    </label>
                    <input
                        type="text"
                        name="paymentMethod"
                        placeholder="Bkash / Nagad / Card etc."
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Submit button */}
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary w-full">
                        Register Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterEvent;