import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const WorriersCard = ({ image, title, subtitle, description, icon, linkedin, instagram, facebook }) => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileTap={{ scale: 0.98 }}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative bg-[#1f2937] rounded-3xl shadow-xl overflow-hidden w-full max-w-[95%] sm:max-w-sm mx-auto border border-[#2d3748] group cursor-pointer"
>
  {/* Image */}
  <div className="relative flex justify-center pt-8">
  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-lg">

      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>

  {/* Content */}
  <div className="p-5 sm:p-6 text-gray-200 font-sans text-center">
    {icon && (
      <div className="text-3xl sm:text-4xl mb-3 text-yellow-500 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300">
        {icon}
      </div>
    )}
    <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-yellow-300">
      {title}
    </h3>
    {subtitle && (
      <p className="text-xs sm:text-sm text-gray-400 italic mb-2 leading-tight">
        {subtitle}
      </p>
    )}
    {/* Emotional Tagline */}
    <p className="text-sm italic text-yellow-400 mb-2">“Driven by purpose, not protocol.”</p>

    {description && (
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
        {description}
      </p>
    )}

    {/* Socials */}
    {(linkedin || instagram || facebook) && (
      <div className="flex justify-center gap-5 mt-3">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition duration-300">
            <FaLinkedin />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:scale-110 transition duration-300">
            <FaInstagram />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:scale-110 transition duration-300">
            <FaFacebookF />
          </a>
        )}
      </div>
    )}
  </div>
</motion.div>

  );
};

export default WorriersCard;
