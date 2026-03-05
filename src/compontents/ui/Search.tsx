import { Search as SearchIcon, Camera } from "lucide-react";

const Search = () => {
  return (
    <div className="relative flex items-center w-full">
      <div className="flex w-full items-center bg-[#F1F1F1] rounded-lg md:rounded-full overflow-hidden border border-transparent focus-within:border-gray-300 transition-all">
        <input
          type="text"
          placeholder="SEARCH BY PICTURE"
          className="w-full bg-transparent px-4 py-2 text-sm outline-none text-gray-600 placeholder:text-gray-400 font-medium"
        />

        <button className="p-2 text-gray-800 hover:scale-110 transition">
          <Camera size={20} />
        </button>

        <button className="bg-[#5D866C] text-white p-2.5 px-4 transition hover:bg-black">
          <SearchIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default Search;
