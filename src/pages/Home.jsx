import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../config/constants";
import CatalogSection from "../components/Catalog/CatalogSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import InstagramGrid from "../components/Instagram/InstagramGrid";
import AboutFounder from "../components/AboutFounder";

const Home = () => {
  return (
    <div className="bg-base-100 text-base-content transition-colors duration-300">

      {/* HERO */}
      <section className="min-h-screen relative flex items-center justify-center text-center overflow-hidden z-30">
        
        {/* Background Image using Picture tag for WebP */}
        <div className="absolute inset-0 z-0">
          {/* Recommended Squoosh.app or cwebp for optimization. Original: hero-bg.png or anjali_logo_512.png */}
          <picture>
            <source srcSet="/images/anjali_logo_512.png" type="image/webp" />
            <img 
              src="/images/anjali_logo_512.png" 
              alt="Anjali's Boutique Hero Background" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="absolute inset-0 bg-black/60 z-10 transition-colors duration-300" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 max-w-2xl text-white px-6 mt-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Mera Dream, Aapka Perfect Fit ✨
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto opacity-100">
            Marathi Parampara ko naye andaz mein pahanen 🌸 <br />
            Yaad rakhein, perfect fitting ek art hai. Aaiye isse saath milkar seekhein.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#classes" className="btn btn-primary rounded-full px-8 text-white shadow-lg border-none hover:scale-105 transition-transform">
              Explore Classes
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-full px-8 shadow-lg hover:scale-105 transition-transform">
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="py-20 px-6 bg-base-200 transition-colors duration-300 text-center border-y border-base-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Humari Premium Classes
          </h2>

          <p className="mt-3 text-base-content/90 text-lg">
            Basic se lekar professional designer level tak ki stitching seekhein.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">

            {/* CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="card bg-base-100 shadow-xl p-8 border border-base-200"
            >
              <h3 className="text-2xl font-semibold text-base-content">Beginner Course</h3>
              <p className="mt-3 text-base-content/80">
                Start your journey with cutting & stitching basics. Perfect for absolute beginners eager to learn.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-sm text-base-content/70 uppercase tracking-widest mb-2">Curriculum</h4>
                <ul className="list-disc pl-5 text-sm text-base-content/90 space-y-1 mb-6">
                   <li>Fabric selection and measuring</li>
                   <li>Basic machine operation</li>
                   <li>Simple kurti and salwar stitching</li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in the Beginner Course`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success text-white mt-auto gap-2 rounded-full shadow-md"
              >
                <FaWhatsapp size={18} /> Register via WhatsApp
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="card bg-base-100 shadow-xl p-8 border border-base-200"
            >
              <h3 className="text-2xl font-semibold text-base-content">Advanced Course</h3>
              <p className="mt-3 text-base-content/80">
                Master embroidery & designer blouse creation. Elevate your skills to a professional boutique level.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-sm text-base-content/70 uppercase tracking-widest mb-2">Curriculum</h4>
                <ul className="list-disc pl-5 text-sm text-base-content/90 space-y-1 mb-6">
                   <li>Intricate embroidery and aari work</li>
                   <li>Bridal and designer blouses</li>
                   <li>Complex necklines and fitting adjustments</li>
                </ul>
              </div>

              <a
                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in the Advanced Course`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success text-white mt-auto gap-2 rounded-full shadow-md"
              >
                <FaWhatsapp size={18} /> Register via WhatsApp
              </a>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* CATALOG SECTION (Replaces old inline products) */}
      <CatalogSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* ABOUT FOUNDER */}
      <AboutFounder />

      {/* INSTAGRAM GRID */}
      <InstagramGrid />

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-base-100 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Visit Us
          </h2>

          <p className="mt-3 text-base-content/90 text-lg">
            Akola, Maharashtra
          </p>

          <div className="mt-6 mb-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success text-white gap-2 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-base-300">
            <iframe
              title="Anjali's Boutique Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8539385813456!2d77.01185317396127!3d20.71615498085611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72f3409cb86d1%3A0x71be8b674b50436c!2sAnjali&#39;s%20Boutique!5e0!3m2!1sen!2sin!4v1756390169457!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-75 sm:h-96"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FLOAT BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white"
        aria-label="Direct WhatsApp Contact"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
};

export default Home;

