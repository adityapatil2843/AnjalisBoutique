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

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="src/assets/images/anjali_logo_512.png"
          alt="logo"
          className="h-[50px] rounded-xl shadow-md"
        />
        <h1 className="text-xl font-semibold tracking-wide text-pink-700">
          Anjali's Boutique
        </h1>
      </div>

      {/* Desktop Links */}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay */}
<div
  onClick={() => setOpen(false)}
  className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
    open ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
/>

{/* Sidebar */}
<div
  ref={sidebarRef}
  className={`fixed top-0 right-0 z-40 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
  role="dialog"
  aria-hidden={!open}
>
  {/* Close Button */}
  <div className="flex justify-end p-5">
    <button
      onClick={() => setOpen(false)}
      aria-label="Close menu"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <img src={assets.cross_icon} className="w-5" alt="close" />
    </button>
  </div>

  {/* Links */}
  <div className="h-[2px] w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
    <ul className="px-6 flex flex-col text-gray-800 font-medium bg-amber-50">
      {navLinks.map((link, index) => (
        <li
          key={link.id}
          className={`border-b ${
            index !== navLinks.length - 1 ? "border-yellow-500/40" : "border-none"
          }`}
        >
          <button
            onClick={() => handleScroll(`#${link.id}`)}
            className="w-full text-left py-4 tracking-wide hover:text-yellow-600 transition"
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