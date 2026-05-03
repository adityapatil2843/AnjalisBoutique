import React from 'react'
import { motion } from 'framer-motion'

const Products = () => {
  return (
    <div>
      {/* PRODUCTS */}
      <section id="products" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700">
          Our Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {[
            { img: "src/images/bride.png", name: "Navari Blouse" },
            { img: "src/images/lehnga.jpeg", name: "Lehnga Blouse" },
            { img: "src/images/wedding.png", name: "Traditional Lugda" },
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
    </div>
  )
}

export default Products

