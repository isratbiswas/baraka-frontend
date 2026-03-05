import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react"; // Optional icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-emerald-700">BARAKA</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted destination for premium quality products. We believe in
            ethical sourcing and bringing value to your doorstep.
          </p>
          <div className="flex space-x-4 grayscale opacity-70">
            {/* Replace with actual payment icon images */}
            <span className="text-xs font-semibold border px-2 py-1 rounded">
              VISA
            </span>
            <span className="text-xs font-semibold border px-2 py-1 rounded">
              PAYPAL
            </span>
            <span className="text-xs font-semibold border px-2 py-1 rounded">
              MASTERCARD
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Shop Categories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Organic Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Trust & Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Truck size={16} /> Free Shipping
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw size={16} /> 30-Day Returns
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} /> Secure Checkout
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-emerald-600 shrink-0" />
              <span>chapai Nawabgonj, Rajshahi, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-600 shrink-0" />
              <span>+8801735-690204</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-emerald-600 shrink-0" />
              <span>support@baraka.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-500 text-xs">
          © {currentYear} Baraka E-Shop. All rights reserved. Built with
          integrity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
