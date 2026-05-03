import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../../config/constants';

const ProductQuickView = ({ product, onClose }) => {
  if (!product) return null;

  const { itemCode, name, img, fallbackImg, priceRange, fabrics, occasion, description, features } = product;

  // Personalized WhatsApp URL
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi Anjali! I saw the *${name}* (${itemCode}) on your website and would like to know more about custom fitting.`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-base-100 rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 bg-base-200 hover:bg-base-300 text-base-content p-2 rounded-full transition-colors"
            aria-label="Close Quick View"
          >
            <FaTimes size={20} />
          </button>

          {/* Image Container */}
          <div className="w-full md:w-1/2 bg-base-200 relative group h-full">
            <picture>
              <source srcSet={img} type="image/webp" />
              <img
                src={fallbackImg}
                alt={name}
                className="w-full h-full object-cover min-h-[350px] md:min-h-[500px]"
              />
            </picture>
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="badge badge-primary font-bold shadow-lg py-3 px-4">{itemCode}</span>
              <span className="badge badge-secondary py-3 px-4">{occasion}</span>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Premium Custom Stitching</span>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-2">{name}</h2>
                <p className="text-2xl font-semibold text-secondary">{priceRange}</p>
              </div>

              <div className="divider my-6"></div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-base-content mb-3 uppercase text-sm tracking-wider">Description</h4>
                  <p className="text-base-content/80 leading-relaxed italic">
                    "{description}"
                  </p>
                </div>

                <div>
                   <h4 className="font-bold text-base-content mb-3 uppercase text-sm tracking-wider">Features</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {features?.map((feature, idx) => (
                       <div key={idx} className="flex items-center gap-2 text-sm text-base-content/90">
                         <FaCheckCircle className="text-success flex-shrink-0" />
                         <span>{feature}</span>
                       </div>
                     ))}
                   </div>
                </div>

                <div>
                   <h4 className="font-bold text-base-content mb-3 uppercase text-sm tracking-wider">Fabrics</h4>
                   <div className="flex flex-wrap gap-2">
                     {fabrics.map((fabric, idx) => (
                       <span key={idx} className="badge badge-outline py-3 px-4">{fabric}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg w-full rounded-full text-white shadow-xl hover:scale-105 transition-all gap-3 overflow-hidden group"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <FaWhatsapp size={24} />
                  <span>Inquire on WhatsApp</span>
                </div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <p className="text-center text-xs text-base-content/60 mt-4 tracking-widest uppercase">
                Hand-stitched in Akola with ❤️
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductQuickView;
