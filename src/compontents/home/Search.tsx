import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  return (
    <div className="search bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-3 relative">
      <Input
        type="text"
        className="w-full h-full outline-none border-0"
        placeholder="Search for Products "
      />
      <Button className="w-10 h-10 rounded-full bg-[#E6E6E6] absolute top-[5px] right-3 z-50 flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <IoSearchOutline
          size={25}
          className="absolute top-3 text-gray-900 right-3 z-50"
        />
      </Button>
    </div>
  );
};

export default Search;
