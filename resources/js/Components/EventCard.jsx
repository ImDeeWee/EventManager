export default function EventCard({ image, description, date, title, price }) {
    return (
        <div className="overflow-hidden bg-white shadow-lg rounded-2xl w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6 text-gray-900">
                <img
                    src={image}
                    alt="Event"
                    className="w-full h-36 object-cover rounded-xl mb-4"
                />
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                    {title || "Event"}
                </h1>
                <p className="text-sm text-gray-600 mb-1">
                    {description || "Come and have fun"}
                </p>
                <p className="text-sm text-gray-500">{date || "20 fevrier"}</p>
                <div className="mt-4 flex justify-between items-center">
                    <button className="bg-blue-500 text-white py-1 px-4 rounded-lg text-sm hover:bg-blue-600">
                        Register
                    </button>
                    <span className="text-sm text-gray-700">
                        {price ? `${price} $` : "Free"}
                    </span>
                </div>
            </div>
        </div>
    );
}
