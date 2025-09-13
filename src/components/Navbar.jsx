import React, { useState } from "react";
import { logoTwo } from "../constants";
import { Search, User, Heart, ShoppingCart, Menu, X, Home, Store } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/store", label: "Our Stores" },
    { to: "/menu", label: "Menu" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blogs", label: "Blogs" },
  ];

  return (
    <>
      <nav className="text-black flex items-center justify-between px-4 md:px-8 py-3 font-body relative mt-6 md:mt-0 mb-5 md:mb-0">
        {/* Mobile: Left menu button */}
        <div className="md:hidden">
          <Menu onClick={() => setOpen(true)} className="w-7 h-7 cursor-pointer" />
        </div>

        {/* Logo */}
        <div className="w-20 md:w-24 flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logoTwo} alt="logo" className="w-full h-auto object-contain" />
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-6 font-medium">
            {links.map((link, idx) => (
              <NavLink key={idx} to={link.to} className={({isActive})=>(isActive ? "text-white bg-red-dark rounded-l-3xl rounded-r-3xl flex justify-center items-center py-2 px-5 w-max" : "rounded-l-3xl rounded-r-3xl flex justify-center items-center py-2 px-5 w-max")}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>

        {/* Mobile: Right search & cart */}
        <div className="flex items-center gap-4 md:hidden">
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[100vw] bg-white text-black z-50 transform ease-in-out transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3 bg-red-dark text-white">
            <h2 className="text-2xl">Navigator</h2>
            <X
              onClick={() => setOpen(false)}
              className="w-8 h-8 cursor-pointer hover:rotate-180 transition-all duration-300 ease-in-out"
            />
          </div>

          <ul className="flex flex-col px-6 py-6 text-lg font-body">
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-gray-300 last:border-none"
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
        <ul className="flex justify-around items-center py-2 text-xs font-body">
          <NavLink to="/" className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/account" className="flex flex-col items-center">
            <User className="w-6 h-6" />
            <span>Account</span>
          </NavLink>
          <NavLink to="/shop" className="flex flex-col items-center">
            <Store className="w-6 h-6" />
            <span>Shop</span>
          </NavLink>
          <NavLink to="/store" className="flex flex-col items-center">
            <Store className="w-6 h-6" />
            <span>Our Stores</span>
          </NavLink>
          <NavLink to="/cart" className="flex flex-col items-center">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart</span>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

