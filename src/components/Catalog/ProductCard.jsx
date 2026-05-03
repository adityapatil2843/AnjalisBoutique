import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEye } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../../config/constants';

const ProductCard = ({ product, onQuickView }) => {
  const { itemCode, name, img, fallbackImg, priceRange, fabrics, occasion } = product;
  
  // Quick inquiry link
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I am interested in *${name}* (Code: ${itemCode}). Could you please share more details?`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group card bg-base-100 shadow-xl overflow-hidden border border-base-200 h-full flex flex-col"
    >
      <figure className="relative h-[320px] overflow-hidden">
        {/* Main Image */}
        <picture>
          <source srcSet={img} type="image/webp" />
          <img
            src={fallbackImg}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </picture>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <span className="badge badge-primary font-bold shadow-lg border-none px-3 py-3">
            {itemCode}
          </span>
          <span className="badge bg-base-200/90 text-primary font-semibold shadow-md border border-primary/20 px-3 py-3 backdrop-blur-sm">
            {occasion}
          </span>
        </div>

        {/* Quick View Overlay (Visible on Hover) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
           <button 
             onClick={onQuickView}
             className="btn btn-primary rounded-full px-6 gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
           >
             <FaEye /> Quick View
           </button>
        </div>
      </figure>

      <div className="card-body p-6 flex flex-col justify-between">
        <div>
          <h3 className="card-title text-base-content text-xl mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-secondary font-bold text-lg mb-3">{priceRange}</p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {fabrics.slice(0, 3).map((fabric, idx) => (
               <span key={idx} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-base-200 text-base-content/80 rounded">
                 {fabric}
               </span>
            ))}
            {fabrics.length > 3 && (
              <span className="text-[10px] font-bold px-2 py-1 bg-base-200 text-base-content/70 rounded">
                +{fabrics.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="card-actions mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success text-white w-full gap-2 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label={`Enquire on WhatsApp for ${name}`}
          >
            <FaWhatsapp size={18} /> Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
