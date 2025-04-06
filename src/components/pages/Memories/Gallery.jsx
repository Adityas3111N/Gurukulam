import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Gallery = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Prevent body scroll on modal open
  useEffect(() => {
    if (selectedImg) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedImg]);

  return (
    <div className="bg-[#fffefc] py-20 px-4 sm:px-10">
      <h2 className="text-4xl font-bold text-center text-[#2c2c2c] mb-12">
        Explore the Moments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            layout
            whileHover={{ scale: 1.04, rotateZ: 1 }}
            className="overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
            onClick={() => setSelectedImg(src)}
          >
            <motion.img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-64 object-cover group-hover:brightness-90 transition duration-300 rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src={selectedImg}
                alt="Full view"
                className="rounded-2xl shadow-2xl border-4 border-white w-full h-auto max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="cursor-pointer absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <IoClose className="text-2xl text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
