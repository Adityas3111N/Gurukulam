import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, title, subtitle, description, icon, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-[#fffaf4] rounded-3xl shadow-2xl overflow-hidden w-full max-w-[95%] sm:max-w-sm mx-auto border border-[#f2e9dc] group cursor-pointer backdrop-blur-md"
    >
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-44 sm:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003D30]/60 to-transparent" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-5 sm:p-6 text-[#2c2c2c] font-sans text-left">
        {icon && (
          <div className="text-3xl sm:text-4xl mb-3 text-yellow-500 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1">
            {icon}
          </div>
        )}

        {title && (
          <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-[#003D30] group-hover:text-yellow-500 transition-colors">
            {title}
          </h3>
        )}

        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 italic mb-2 leading-tight">
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
    </motion.div>
  );
};

export default Card;
