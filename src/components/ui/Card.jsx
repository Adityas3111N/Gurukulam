import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Card = ({ image, title, subtitle, description, icon, children }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={() => setShowPreview(true)}
        className="relative bg-[#fffaf4] rounded-3xl shadow-xl overflow-hidden w-full max-w-[95%] sm:max-w-sm mx-auto border border-[#f2e9dc] group cursor-pointer backdrop-blur-md transition-transform"
      >
        {/* Image Section */}
        {image && (
          <div className="relative w-full h-44 sm:h-56 overflow-hidden">
            <img
              src={image}
              alt={`Story of ${title}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="lazy"
              width="400"
              height="224"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003D30]/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 text-[#2c2c2c] font-sans text-left">
          {icon && (
            <div className="text-3xl sm:text-4xl mb-3 text-yellow-500 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300">
              {icon}
            </div>
          )}

          {title && (
            <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-[#003D30] group-hover:text-yellow-500 transition-colors">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 italic mb-2 leading-tight">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {children && <div className="mt-3">{children}</div>}
        </div>
      </motion.article>

      {/* Modal Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>

              {/* Full Image */}
              <img
                src={image}
                alt={`Preview of ${title}'s journey`}
                className="w-full h-[80vh] object-contain sm:object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
