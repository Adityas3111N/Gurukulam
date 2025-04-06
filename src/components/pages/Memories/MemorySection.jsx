import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFutbol,
  FaFlask,
  FaFeatherAlt,
  FaTrophy,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

const memoryCards = [
  {
    title: "Sports",
    icon: <FaFutbol />,
    color: "from-green-100 to-green-300",
    link: "/gallery/sports",
  },
  {
    title: "Science",
    icon: <FaFlask />,
    color: "from-yellow-100 to-yellow-300",
    link: "/gallery/science",
  },
  {
    title: "Poetries",
    icon: <FaFeatherAlt />,
    color: "from-pink-100 to-pink-300",
    link: "/gallery/poetries",
  },
  {
    title: "Achievements",
    icon: <FaTrophy />,
    color: "from-blue-100 to-blue-300",
    link: "/gallery/achievements",
  },
  {
    title: "Khusiyan",
    icon: <FaSmile />,
    color: "from-purple-100 to-purple-300",
    link: "/gallery/khusiyan",
  },
  {
    title: "Friendship", // From my side :)
    icon: <FaUsers />,
    color: "from-orange-100 to-orange-300",
    link: "/gallery/friendship",
  },
];

const MemoryCard = ({ title, icon, color, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl text-center group transition-all duration-300 ease-out hover:shadow-2xl`}
    >
      <Link to={link} className="flex flex-col items-center gap-4">
        <div className="text-5xl text-[#003d30] drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#2c2c2c]">{title}</h3>
      </Link>
    </motion.div>
  );
};

const MemoriesSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 bg-[#fffdf8] text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Relive the Memories
      </motion.h2>

      <p className="text-[#444] text-md md:text-lg max-w-3xl mx-auto mb-14">
        Every smile, every win, every discovery. Dive into the moments that made Gurukulam unforgettable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {memoryCards.map((mem, index) => (
          <MemoryCard key={index} {...mem} />
        ))}
      </div>
    </section>
  );
};

export default MemoriesSection;
