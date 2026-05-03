import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../../data/products';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import ProductQuickView from './ProductQuickView';

const CatalogSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((product) => {
    if (activeFilter === 'All') return true;
    return product.occasion === activeFilter;
  });

  return (
    <section id="catalog" className="py-24 px-6 bg-base-200 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6">Explore Premium Designs</h2>
          <p className="text-base-content/80 max-w-2xl mx-auto text-lg leading-relaxed pt-2">
            Discover our meticulously crafted collection of exquisite designs for every occasion.
          </p>
        </motion.div>

        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard 
                  product={product} 
                  onQuickView={() => setSelectedProduct(product)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-base-content/40 py-20 text-xl italic tracking-wide"
          >
            No products found for this occasion right now.
          </motion.div>
        )}
      </div>

      {/* QUICK VIEW MODAL */}
      <ProductQuickView 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default CatalogSection;
