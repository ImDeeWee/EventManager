export default function InputSearch({ onSearch }) {
    return (
        <div className="flex items-center border border-gray-300 rounded-3xl w-1/5">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}
