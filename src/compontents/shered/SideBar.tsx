"use client";

import React from "react";

const categories = [
  { name: "Fresh Fruits", icon: "🍎" },
  { name: "Premium Dates", icon: "🌴" },
  { name: "Organic Honey", icon: "🍯" },
  { name: "Desi Ghee", icon: "🧈" },
  { name: "Healthy Nuts", icon: "🥜" },
  { name: "Natural Seeds", icon: "🌱" },
  { name: "Dry Fruits", icon: "🍇" },
  { name: "Organic Products", icon: "🌿" },
  { name: "Energy Snacks", icon: "🥥" },
  { name: "Gift Packs", icon: "🎁" },
  { name: "Special Offers", icon: "🔥" },
];

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:block w-64 border-r bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-[#5D866C] font-bold text-lg mb-4">Category</h2>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center gap-3 px-2 py-2 text-slate-600 hover:bg-slate-50 hover:text-[#5D866C] rounded-md cursor-pointer transition-all text-[13px]"
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
