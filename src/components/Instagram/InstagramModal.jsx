import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaInstagram, FaHeart, FaComment } from "react-icons/fa";

const InstagramModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-base-100 rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
            aria-label="Close Modal"
          >
            <FaTimes size={20} />
          </button>

          {/* Image Side */}
          <div className="w-full md:w-3/5 bg-black flex items-center justify-center">
            <img
              src={post.imageUrl}
              alt="Instagram Post"
              className="max-h-[70vh] md:max-h-[85vh] object-contain w-full"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/5 p-6 flex flex-col justify-between bg-base-100">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-base-200">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaInstagram className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-base-content">anjalipatil26459</h4>
                  <p className="text-xs text-base-content/50">Akola, Maharashtra</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-base-content/80 text-sm leading-relaxed italic">
                  {post.caption ? `"${post.caption}"` : "Visit our Instagram for more details and latest updates on our boutique collections."}
                </p>
                
                {(post.likes > 0 || post.comments > 0) && (
                  <div className="flex items-center gap-6 pt-2">
                    {post.likes > 0 && (
                      <div className="flex items-center gap-2 text-primary">
                        <FaHeart />
                        <span className="font-bold">{post.likes}</span>
                      </div>
                    )}
                    {post.comments > 0 && (
                      <div className="flex items-center gap-2 text-primary/70">
                        <FaComment />
                        <span className="font-bold">{post.comments}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full gap-2 rounded-full text-white"
              >
                <FaInstagram size={18} /> View Post on Instagram
              </a>
              <p className="text-[10px] text-center mt-3 text-base-content/40 uppercase tracking-widest">
                Support local craftsmanship 🌸
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InstagramModal;
