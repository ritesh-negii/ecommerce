import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-wide text-slate-800 hover:text-blue-500 transition-colors duration-300 border-2 border-transparent hover:border-blue-400 px-2 py-1"
      >
        Auralis
      </Link>

      {/* Search Bar */}
      <div className="flex flex-1 mx-6 max-w-2xl items-center bg-blue-50 border border-blue-200 rounded-md px-3 py-1 focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300">
        <Search className="text-blue-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-[15px]"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex ml-6 space-x-4">
        {["Home", "Products", "Deals", "Contact"].map((link) => (
          <Link
            key={link}
            to={`/${link.toLowerCase()}`}
            className="text-gray-700 font-semibold px-3 py-1 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Right Section */}
      <div className="ml-auto flex items-center space-x-4">
        <Link
          to="/login"
          className="flex items-center text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-300"
        >
          <User className="w-5 h-5 mr-1" /> Login
        </Link>
      {/* Cart Section */}
<Link
  to="/cart"
  className="relative flex items-center text-gray-700 hover:text-blue-500 font-semibold transition-colors duration-300"
>
  <ShoppingCart className="w-5 h-5 mr-1" />
  Cart
  {/* Cart Count Badge */}
  <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
    0
  </span>
</Link>

      </div>
    </header>
  );
};

export default Header;






