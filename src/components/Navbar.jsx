import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets/assets.js";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Classes", id: "classes" },
  { name: "Products", id: "products" },
  { name: "Trends", id: "trends" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  // ✅ Smooth scroll
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // ✅ Lock body scroll (VERY IMPORTANT)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <nav className="fixed w-full top-0 left-0 z-40 bg-white/90 backdrop-blur-md shadow-sm px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/assets/images/anjali_logo_512.png"
          alt="logo"
          className="h-9 sm:h-11 rounded-lg shadow-sm"
        />
        <h1 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-pink-700">
          Anjali's Boutique
        </h1>
      </div>

      {/* DESKTOP */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleScroll(`#${link.id}`)}
              className="hover:text-pink-600 transition"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* 🔥 OVERLAY (fade smooth) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 🔥 SIDEBAR (REAL SMOOTH SLIDE) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-90"
        }`}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <img src={assets.cross_icon} className="w-5" alt="close" />
          </button>
        </div>

        {/* DIVIDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

        {/* LINKS */}
        <ul className="px-5 flex flex-col text-gray-800 font-medium bg-amber-50 text-base">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`border-b ${
                index !== navLinks.length - 1
                  ? "border-yellow-500/40"
                  : "border-none"
              }`}
            >
              <button
                onClick={() => handleScroll(`#${link.id}`)}
                className="w-full text-left py-4 tracking-wide active:scale-[0.97] hover:text-yellow-600 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;