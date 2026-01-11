import Link from "next/link";
import Search from "../home/Search";

const Navbar = () => {
  return (
    <header className="py-3">
      <div className="container flex items-center justify-between">
        <div className="">
          <h4 className="font-bold text-2xl text">BARAKA-E-Shop</h4>
        </div>
        <div className="">
          <Search />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Link href={"/login"} className="font-bold hover:text-[#5D866C]">
              Login
            </Link>
            <span className="text-[#5D866C]">|</span>
            <Link href={"/register"} className="font-bold hover:text-[#5D866C]">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
