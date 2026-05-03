import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaChalkboardTeacher } from 'react-icons/fa';
import {images} from '../assets/images/index.js';
import tailor from '../assets/images/tailor.jpg'
const AboutFounder = () => {
  return (
    <section id="about" className="py-24 px-6 bg-base-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl">
              <picture>
                <source srcSet={images.anjaliLogo512} type="image/webp" />
                <img 
                  src={tailor} 
                  alt="Anjali Patil - Founder" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" 
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-8 -right-4 bg-primary text-white p-6 rounded-3xl shadow-xl border-4 border-base-100 rotate-[-5deg]"
            >
              <div className="text-center">
                <span className="block text-4xl font-black">10+</span>
                <span className="block text-sm font-semibold uppercase tracking-widest mt-1">Years of<br/>Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Meet The Founder</span>
            <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6 leading-tight">
              Anjali Patil
            </h2>
            
            <div className="space-y-6 text-lg text-base-content/90 leading-relaxed mb-8">
              <p>
                Hello! Main hoon Anjali Patil, aur yeh mera passion project hai. Fashion aur designing hamesha se mera pyaar raha hai. Meri journey shuru hui thi ek choti si silai machine ke sath, aur aaj hum <strong>Anjali's Boutique</strong> ke roop mein Akola ka ek trusted naam ban chuke hain.
              </p>
              <p>
                Mera goal sirf kapde silna nahi hai, balki aapko aapki best look dena hai. Chahe woh bridal blouse ho ya traditional Nauvari saree, we ensure every stitch is perfect. Aur is skills ko aage badhane ke liye, hum professional tailoring and designing ki classes bhi conduct karte hain.
              </p>
              <p className="font-semibold text-base-content italic border-l-4 border-primary pl-4">
                "Fashion banne se zyada, usse samjhna zaroori hai. Let's create your perfect fit together!"
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 p-6 bg-base-200 rounded-2xl border border-base-300">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">Certified Designer</h4>
                  <p className="text-sm text-base-content/80 mt-1">Advanced Diploma in Fashion Designing. [Update Details here]</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <FaAward size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">Bridal Specialist</h4>
                  <p className="text-sm text-base-content/80 mt-1">Specialized in intricate Zari work and custom Paithani stitching.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <FaChalkboardTeacher size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">Passionate Educator</h4>
                  <p className="text-sm text-base-content/80 mt-1">Trained over 500+ successful students in professional tailoring.</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

