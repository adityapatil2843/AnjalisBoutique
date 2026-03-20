import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Products from "./Products.jsx";


const Home = () => {
  return (
    <div className="bg-base-100 text-gray-800">

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/images/anjali_logo_512.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Craft Elegance with Every Stitch ✨
          </h1>

          <p className="mt-4 text-lg">
            मराठी परंपरेचा वारसा, आता तुमच्या हातात 🌸 <br />
            Learn blouse & saree designing like a pro.
          </p>

          <a href="#classes" className="btn btn-primary mt-6 rounded-full">
            Explore Classes
          </a>
        </motion.div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="py-16 px-6 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold text-pink-700">
          Our Premium Classes
        </h2>

        <p className="mt-2 text-gray-600">
          Learn from basics to designer-level stitching.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* CARD */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold">Beginner Course</h3>
            <p className="mt-2 text-gray-500">
              Start your journey with cutting & stitching basics.
            </p>

            <a
              href="https://wa.me/919527231973"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success mt-4 gap-2"
            >
              <FaWhatsapp /> Register
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl p-6"
          >
            <h3 className="text-xl font-semibold">Advanced Course</h3>
            <p className="mt-2 text-gray-500">
              Master embroidery & designer blouse creation.
            </p>

            <a
              href="https://wa.me/919527231973"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success mt-4 gap-2"
            >
              <FaWhatsapp /> Register
            </a>
          </motion.div>

        </div>
      </section>
      
      {/* PRODUCTS */}
      
      <section id="products" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700">
          Our Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {[
            { img: "/assets/images/bride.png", name: "Bride's Blouse" },
            { img: "/assets/images/lehnga.jpeg", name: "Lehnga Blouse" },
            { img: "/assets/images/wedding.png", name: "Wedding Occasion" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="card bg-base-100 shadow-lg overflow-hidden"
            >
              <figure>
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <p className="font-medium">{item.name}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-base-200 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-pink-700">
            About Us
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-600">
            Founded by <strong>Anjali Patil</strong>, our boutique blends
            traditional Marathi craftsmanship with modern elegance.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700">
          Visit Us
        </h2>

        <p className="mt-2 text-gray-600">
          Akola, Maharashtra
        </p>

        <a
          href="https://wa.me/919527231973"
          target="_blank"
          rel="noreferrer"
          className="btn btn-success mt-6 gap-2"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8539385813456!2d77.01185317396127!3d20.71615498085611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72f3409cb86d1%3A0x71be8b674b50436c!2sAnjali&#39;s%20Boutique!5e0!3m2!1sen!2sin!4v1756390169457!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px]"
          ></iframe>
        </div>
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/919527231973"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

    </div>
  );
};

export default Home;
