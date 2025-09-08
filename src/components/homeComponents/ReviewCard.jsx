const ReviewCard = ({ reviewData }) => {
    const { rating, review } = reviewData;
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-5 w-full max-w-md mx-auto hover:shadow-lg transition duration-300">
            {/* Rating */}
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">⭐ Rating</h3>
                <span className="text-sm font-medium text-yellow-600">
                    {rating} / 5
                </span>
            </div>

            {/* Divider line */}
            <hr className="mb-3" />

            {/* Review text */}
            <p className="text-gray-700 text-base italic">“{review}”</p>
        </div>
    );
};

export default ReviewCard;