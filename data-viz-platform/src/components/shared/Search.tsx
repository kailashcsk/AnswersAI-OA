const Search = () => {
    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Search"
                className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2 pl-10
                 focus:outline-none focus:border-[#4A4A4A] text-white placeholder-gray-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                🔍
            </span>
        </div>
    );
};

export default Search;