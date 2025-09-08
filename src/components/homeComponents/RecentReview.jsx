import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const RecentReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="my-10 px-4 md:px-8 lg:px-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
                💬 User Reviews
            </h2>

            {reviews?.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((reviewData) => (
                        <ReviewCard key={reviewData._id} reviewData={reviewData} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-100">No reviews yet.</p>
            )}
        </div>
    );
};

export default RecentReview;