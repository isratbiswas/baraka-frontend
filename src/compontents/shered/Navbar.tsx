import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  User,
  Grid,
  Phone,
  MessageCircle,
} from "lucide-react";
import Search from "../ui/Search";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="hidden md:flex container mx-auto px-4 py-4 items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-extrabold text-2xl tracking-tighter text-gray-900">
              BARAKA<span className="text-[#5D866C]">-E-Shop</span>
            </h1>
          </Link>
          <div className="flex-grow max-w-2xl">
            <Search />
          </div>
          <div className="flex items-center gap-6">
            <Link href="/cart" className="text-gray-700 hover:text-[#5D866C]">
              <ShoppingCart size={24} />
            </Link>
            <Link href="/wishlist" className="text-gray-700 hover:text-red-500">
              <Heart size={24} />
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-[#5D866C]">
              <User size={24} />
            </Link>
          </div>
        </div>

        <div className="md:hidden p-3 bg-[#5D866C]">
          <Search />
        </div>
      </header>

      {/* --- MOBILE BOTTOM NAVIGATION (Like your image) --- */}
      <nav className="fixed bottom-0 left-0 z-50 w-full bg-[#5D866C] text-white md:hidden">
        <div className="flex items-center justify-around py-2">
          <Link href="/categories" className="flex flex-col items-center gap-1">
            <Grid size={20} />
            <span className="text-[10px] font-medium">Category</span>
          </Link>

          <Link href="/login" className="flex flex-col items-center gap-1">
            <User size={20} />
            <span className="text-[10px] font-medium">Account</span>
          </Link>

          {/* Center Logo Icon */}
          <Link
            href="/"
            className="bg-white p-2 rounded-lg -mt-8 shadow-lg border-2 border-[#D93250]"
          >
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-[#D93250] font-bold">
              B
            </div>
          </Link>

          <Link href="tel:+123456" className="flex flex-col items-center gap-1">
            <Phone size={20} />
            <span className="text-[10px] font-medium">Call</span>
          </Link>

          <Link href="/chat" className="flex flex-col items-center gap-1">
            <MessageCircle size={20} />
            <span className="text-[10px] font-medium">Chat</span>
          </Link>
        </div>
      </nav>

      <div className="fixed right-4 bottom-24 flex flex-col gap-3 md:hidden z-40">
        <button className="bg-white p-3 rounded-full shadow-xl border border-gray-100 text-[#D93250]">
          <ShoppingCart size={22} />
        </button>
        <button className="bg-white p-3 rounded-full shadow-xl border border-gray-100 text-gray-800">
          <Heart size={22} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
