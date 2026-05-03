import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/testimonials';
import TestimonialCard from './TestimonialCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [filterType, setFilterType] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = testimonialsData.filter(t => 
    filterType === 'all' || t.type === filterType
  );

  // Auto-play logic
  useEffect(() => {
    if (filtered.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filtered.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [filtered.length]);

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
     <section id="testimonials" className="py-24 px-6 bg-base-100 transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">What Our Customers Say</h2>
            <p className="text-base-content/80 max-w-2xl mx-auto text-lg pt-2 leading-relaxed">
               Hear from our beautiful brides and passionate students who have experienced the magic of <strong className="text-primary">Anjali's Boutique</strong>.
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-16">
             {['all', 'customer', 'student'].map((type) => (
               <button
                  key={type}
                  onClick={() => handleFilterChange(type)}
                  className={`btn btn-sm md:btn-md rounded-full px-6 md:px-8 transition-all capitalize shadow-md ${filterType === type ? 'btn-primary text-white scale-105' : 'btn-outline border-base-300 bg-base-100'}`}
               >
                 {type}
               </button>
             ))}
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto min-h-[350px] flex items-center justify-center">
            
            {/* Nav Buttons (Desktop) */}
            {filtered.length > 1 && (
              <>
                <button 
                  onClick={handlePrev} 
                  className="hidden md:flex absolute -left-12 z-20 btn btn-circle btn-primary btn-sm shadow-xl"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={handleNext} 
                  className="hidden md:flex absolute -right-12 z-20 btn btn-circle btn-primary btn-sm shadow-xl"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <div className="w-full relative overflow-hidden flex justify-center">
              <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-full flex justify-center"
                  >
                    <div className="w-full max-w-sm md:max-w-xl scale-105 pointer-events-none md:pointer-events-auto">
                      <TestimonialCard testimonial={filtered[currentIndex]} />
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center text-base-content/60 w-full py-10 italic">
                    No reviews available for this category yet.
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            {filtered.length > 1 && (
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                {filtered.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-8' : 'bg-base-300 hover:bg-primary/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
     </section>
  );
};

export default TestimonialsSection;
