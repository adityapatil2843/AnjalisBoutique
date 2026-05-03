import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTAGRAM_URL, INSTAGRAM_FEED_API } from '../../config/constants';
import { instagramPosts as staticPosts } from '../../data/instagram';
import InstagramModal from './InstagramModal';

const InstagramGrid = () => {
  const [posts, setPosts] = useState(staticPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // Future Logic for Live Feed API
  useEffect(() => {
    let isMounted = true;
    if (INSTAGRAM_FEED_API) {
      setLoading(true);
      fetch(INSTAGRAM_FEED_API)
        .then(res => res.json())
        .then(data => {
          if (!isMounted) return;
          // Behold.so returns an object with a 'posts' array
          const postsArray = Array.isArray(data) ? data : (data.posts || []);
          
          if (postsArray.length > 0) {
            // Map Behold fields to the format expected by the components
            const formattedPosts = postsArray.map(post => ({
              ...post,
              // For videos/reels, mediaUrl is the video file; thumbnailUrl is the preview
              imageUrl: post.thumbnailUrl || post.mediaUrl,
              url: post.permalink,
              // Behold usually doesn't provide these on the free/basic tier
              likes: post.likesCount || 0,
              comments: post.commentsCount || 0
            }));
            setPosts(formattedPosts);
          }
          setLoading(false);
        })
        .catch(err => {
          if (!isMounted) return;
          console.error("Failed to fetch live Instagram feed", err);
          setLoading(false);
        });
    }
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="instagram" className="py-24 px-4 bg-base-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-6 flex items-center justify-center gap-4">
            <FaInstagram className="text-primary animate-pulse" />
            Follow The Journey
          </h2>
          <p className="text-base-content/80 max-w-xl mx-auto text-lg leading-relaxed">
            See our latest creations, student work, and boutique life in Akola. 
            Real stories, real stitching, real passion.
          </p>
        </motion.div>

        {/* Grid Section */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-3xl bg-base-200 animate-pulse border border-base-200" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {posts.map((post, index) => (
              <motion.div
                key={post.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer aspect-square rounded-3xl overflow-hidden shadow-xl bg-base-200 border border-base-200"
                onClick={() => setSelectedPost(post)}
              >
                {/* Image */}
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4">
                  <div className="flex gap-6 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {post.likes > 0 && (
                      <div className="flex items-center gap-2">
                        <FaHeart className="text-2xl drop-shadow-lg" />
                        <span className="font-black text-lg drop-shadow-md">{post.likes}</span>
                      </div>
                    )}
                    {post.comments > 0 && (
                      <div className="flex items-center gap-2">
                        <FaComment className="text-2xl drop-shadow-lg" />
                        <span className="font-black text-lg drop-shadow-md">{post.comments}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
                    Click to Expand
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg rounded-full px-12 gap-3 text-white shadow-2xl hover:scale-105 transition-all group"
          >
            <FaInstagram className="group-hover:rotate-12 transition-transform" /> 
            Join @anjalipatil26459
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <InstagramModal 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </section>
  );
};

export default InstagramGrid;
