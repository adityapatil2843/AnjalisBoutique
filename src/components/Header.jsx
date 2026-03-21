import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* TOP BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 text-white px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-md"
          >
            {/* LEFT CONTENT */}
            <div className="flex items-center gap-2 text-[11px] sm:text-sm md:text-base leading-tight">
              <FaStar className="text-yellow-300" />
              <p className="font-medium">
                <strong>New Batch Open!</strong>{" "}
                Learn blouse & saree design —{" "}
                <span className="font-semibold">Limited Seats</span>
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowBanner(false)}
              className="text-lg p-1 hover:scale-110 transition"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md shadow-sm"
        >
          <Navbar />
        </motion.div>
      </header>
    </>
  );
};

export default Header;