"use client";

import React from "react";

const categories = [
  { name: "Shoes", icon: "👟" },
  { name: "Bag", icon: "👜" },
  { name: "Jewelry", icon: "💍" },
  { name: "Beauty And Personal Care", icon: "💄" },
  { name: "Men's Clothing", icon: "👕" },
  { name: "Women's Clothing", icon: "👗" },
  { name: "Baby Items", icon: "🍼" },
  { name: "Eyewear", icon: "👓" },
  { name: "Office Supplies", icon: "📎" },
  { name: "Seasonal Products", icon: "🎄" },
  { name: "Phone Accessories", icon: "📱" },
];

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-rose-600 font-bold text-lg mb-4">Category</h2>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-rose-500 rounded-md cursor-pointer transition-all text-[13px]"
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="truncate">{cat.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
