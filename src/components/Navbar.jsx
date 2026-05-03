import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Classes", id: "classes" },
  { name: "Catalog", id: "catalog" },
  { name: "Reviews", id: "testimonials" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();
  const { theme, toggleTheme } = useTheme();

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
    <nav className="fixed w-full top-0 left-0 z-40 bg-base-100/90 backdrop-blur-md shadow-sm px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-colors duration-300">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/images/anjali_logo_512.png"
          alt="logo"
          className="h-9 sm:h-11 rounded-lg shadow-sm"
        />
        <h1 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-primary">
          Anjali's Boutique
        </h1>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 font-medium text-base-content">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(`#${link.id}`)}
                className="hover:text-primary transition"
                aria-label={`Scroll to ${link.name}`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* THEME TOGGLE (DESKTOP) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-base-200 transition text-base-content relative w-10 h-10 flex items-center justify-center overflow-hidden"
          aria-label="Toggle Theme"
        >
          <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'anjali-light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
            <FaMoon size={18} />
          </div>
          <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'anjali-dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
            <FaSun size={18} />
          </div>
        </button>
      </div>

      {/* MOBILE ACTIONS */}
      <div className="md:hidden flex items-center gap-3">
         {/* THEME TOGGLE (MOBILE) */}
         <button
          onClick={toggleTheme}
          className="p-2 text-base-content relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-full hover:bg-base-200"
          aria-label="Toggle Theme"
        >
          <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'anjali-light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
            <FaMoon size={16} />
          </div>
          <div className={`absolute transition-all duration-500 ease-in-out ${theme === 'anjali-dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
            <FaSun size={16} />
          </div>
        </button>

        <button
          className="text-2xl p-2 rounded-lg text-base-content hover:bg-base-200 transition"
          onClick={() => setOpen(true)}
          aria-label="Open Mobile Menu"
        >
          ☰
        </button>
      </div>

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
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-base-100 shadow-2xl z-50 transform transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-90"
        }`}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-base-200 transition text-base-content"
          >
            ✕
          </button>
        </div>

        {/* DIVIDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50" />

        {/* LINKS */}
        <ul className="px-5 flex flex-col text-base-content font-medium bg-base-100 text-base">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`border-b ${
                index !== navLinks.length - 1
                  ? "border-base-200"
                  : "border-none"
              }`}
            >
              <button
                onClick={() => handleScroll(`#${link.id}`)}
                className="w-full text-left py-4 tracking-wide active:scale-[0.97] hover:text-primary transition"
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
