"use client";

import { Product } from "@/types/products";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apple",
    image: "/apple.jpg",
    price: 220,
    sold: 2632015,
  },
  {
    id: 2,
    name: "Premium Dates",
    image: "/dates.jpg",
    price: 850,
    sold: 2632015,
  },
  {
    id: 3,
    name: "Organic Honey",
    image: "/honey.jpg",
    price: 650,
    sold: 2632015,
  },
  {
    id: 4,
    name: "Desi Ghee",
    image: "/gee.jpg",
    price: 1200,
    sold: 2632015,
  },
  {
    id: 5,
    name: "Almond Nuts",
    image: "/almond.jpg",
    price: 1400,
    sold: 2632015,
  },
  {
    id: 6,
    name: "Chia Seeds",
    image: "/chia.jpg",
    price: 500,
    sold: 2632015,
  },
  {
    id: 7,
    name: "Chia Seeds",
    image: "/chia.jpg",
    price: 500,
    sold: 2632015,
  },
  {
    id: 8,
    name: "Chia Seeds",
    image: "/chia.jpg",
    price: 500,
    sold: 2632015,
  },
];

export default function ProductsSection() {
  //container  px-4 py-3
  return (
    <section className="w-full mt-6 px-2 lg:px-4 bg-gray-50/50 py-6">
      <h2 className="text-xl font-bold mb-4 text-[#004b61] flex items-center gap-2">
        <span className="w-1.5 h-6 bg-rose-500 rounded-full"></span>
        Trending Products
      </h2>

      {/* Change 2: responsive grid that scales from 2 to 6 columns based on screen width */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-100 rounded-xl p-2 hover:border-rose-200 hover:shadow-md transition-all duration-300 w-full"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-tl-sm">
              3% OFF
            </div>

            {/* Product Image */}
            <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Action Buttons */}
              <div className="absolute right-1.5 bottom-1.5 flex flex-col gap-1.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-white rounded-full shadow-md border border-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors">
                  <ShoppingCart size={16} />
                </button>
                <button className="p-1.5 bg-white rounded-full shadow-md border border-gray-100 text-gray-400 hover:text-rose-500 transition-colors">
                  <Heart size={16} />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-1 px-0.5">
              <h3 className="text-[12px] md:text-[13px] text-gray-700 line-clamp-2 leading-tight min-h-[2rem]">
                {product.name}
              </h3>

              <div className="flex items-center gap-0.5 text-rose-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" />
                ))}
              </div>

              <div className="flex flex-wrap items-baseline gap-1">
                <span className="text-sm md:text-base font-bold text-gray-900">
                  ৳{product.price}
                </span>
                <span className="text-[10px] text-gray-400 line-through">
                  ৳{product.price + 5}
                </span>
              </div>

              <div className="pt-1 border-t border-gray-50">
                <span className="text-[9px] text-gray-500 uppercase font-semibold">
                  SOLD: {product.sold?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
