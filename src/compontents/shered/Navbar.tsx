"use client";

import Link from "next/link";
import React, { useState } from "react";
import Search from "../home/Search";
import { Heart, ShoppingCart, User, Menu, X, MapPin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Announcement */}
      <div className="hidden md:block bg-[#5D866C] text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Global Shipping
            </span>

            <span className="opacity-70">|</span>

            <span>Support: +8801735-690204</span>
          </div>

          <p>
            Flash Sale! Use code{" "}
            <span className="font-bold text-yellow-300 underline">
              BARAKA10
            </span>{" "}
            for 10% off
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-black tracking-tight">
              BARAKA
              <span className="text-[#5D866C] ml-1">-E</span>
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <Search />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Account */}
            <Link
              href="/login"
              className="hidden sm:flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <User size={20} />
              <span className="hidden lg:block text-sm font-medium">
                Account
              </span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <Heart size={22} />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-1 -right-1 bg-[#5D866C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <Search />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Close */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-4 font-medium">
            <Link href="/shop" className="block hover:text-[#5D866C]">
              All Categories
            </Link>

            <Link href="/offers" className="block hover:text-[#5D866C]">
              Special Offers
            </Link>

            <Link href="/login" className="block hover:text-[#5D866C]">
              My Account
            </Link>

            <Link href="/cart" className="block hover:text-[#5D866C]">
              Cart
            </Link>
          </div>

          {/* CTA */}
          <button className="mt-6 w-full bg-[#5D866C] text-white py-3 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
