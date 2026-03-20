import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-base-200 text-gray-700 px-6 py-12 mt-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-pink-700">
            Anjali's Boutique
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Blending Marathi tradition with modern elegance.  
            Crafting beauty, one stitch at a time 🌸
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Classes", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-pink-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Connect With Us</h3>

          <p className="text-sm text-gray-600">
            Akola, Maharashtra
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://wa.me/919527231973"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>

          <a
            href="https://wa.me/919527231973"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm mt-4 gap-2"
          >
            <FaWhatsapp /> Chat Now
          </a>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t pt-4">
        <p className="flex items-center justify-center gap-2">
          © 2025 Anjali Boutique | Made with <FaHeart className="text-red-500" /> in Maharashtra
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;