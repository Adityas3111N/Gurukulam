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

// Memory card data with updated routes
const memoryCards = [
  {
    title: "Sports",
    icon: <FaFutbol />,
    color: "from-green-100 to-green-300",
    link: "/memories/sports",
  },
  {
    title: "Science",
    icon: <FaFlask />,
    color: "from-yellow-100 to-yellow-300",
    link: "/memories/science",
  },
  {
    title: "Poetries",
    icon: <FaFeatherAlt />,
    color: "from-pink-100 to-pink-300",
    link: "/memories/poetries",
  },
  {
    title: "Achievements",
    icon: <FaTrophy />,
    color: "from-blue-100 to-blue-300",
    link: "/memories/achievements",
  },
  {
    title: "Khusiyan",
    icon: <FaSmile />,
    color: "from-purple-100 to-purple-300",
    link: "/memories/khusiyan",
  },
  {
    title: "Friendship",
    icon: <FaUsers />,
    color: "from-orange-100 to-orange-300",
    link: "/memories/friendship",
  },
];

// Memory card component
const MemoryCard = ({ title, icon, color, link, index }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl text-center group transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2`}
  >
    <Link to={link} className="flex flex-col items-center gap-4">
      <div className="text-5xl text-[#003d30] drop-shadow-lg group-hover:translate-y-[-4px] transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#2c2c2c]">{title}</h3>
    </Link>
  </motion.div>
);

export default function MemoriesPage() {
  return (
    <div className="bg-[#fffdf8]">
      <section className="py-20 px-6 sm:px-10 text-center">
        <motion.h1
          className="text-5xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Relive the Memories
        </motion.h1>
        <p className="text-[#444] text-md md:text-lg max-w-3xl mx-auto mb-14">
          Every smile, every win, every discovery. Dive into the moments that made Gurukulam unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {memoryCards.map((card, i) => (
            <MemoryCard key={i} {...card} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
