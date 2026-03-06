"use client";

import React from "react";
import { X } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
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

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-[100] transition-visibility duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside
        className={`relative w-[280px] bg-white h-full shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-gray-600 font-bold text-xl mt-24">Category</h2>
          {/* Clear/Close Icon beside the header */}
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full"
          >
            <X size={24} className="text-slate-600" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-70px)]">
          <ul className="py-2">
            {categories.map((cat) => (
              <li
                key={cat.name}
                className="flex items-center gap-4 px-4 py-3 text-slate-700 active:bg-slate-100 border-b border-slate-50"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="font-medium text-sm">{cat.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
