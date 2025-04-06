import React from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaSmile,
  FaHandsHelping,
  FaSeedling,
  FaRegCheckCircle,
} from "react-icons/fa";

const ThankYouOverlay = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-6 sm:p-8 relative text-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl transition-colors duration-300 cursor-pointer"
          aria-label="Close Thank You"
        >
          <FaTimes />
        </button>

        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
          className="bg-green-100 p-5 rounded-full mx-auto mb-4 shadow-inner"
        >
          <FaRegCheckCircle className="text-green-500 text-5xl animate-pulse" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-bold text-[#2c7a7b] mb-3"
        >
          Thank You! Admin Has Been Notified ✅
        </motion.h2>

        {/* Supporting message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-gray-700 text-sm sm:text-base mb-5"
        >
          Your submission was successful. 💫 <br />
          Our team will review it shortly. You're making a real impact!
        </motion.p>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center gap-6 text-[#2c7a7b] text-xl mb-6"
        >
          {[{ icon: <FaSmile />, label: "Joy" },
            { icon: <FaHandsHelping />, label: "Support" },
            { icon: <FaSeedling />, label: "Growth" }].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {item.icon}
              <span className="text-xs mt-1 text-gray-600">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Manual review note */}
        <p className="text-xs text-gray-500 mt-2 italic mb-4">
          This doesn’t verify payment. Your form will be reviewed manually.
        </p>

        {/* Close button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={onClose}
          className="bg-[#2c7a7b] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#27696b] transition-all duration-300 cursor-pointer"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouOverlay;
