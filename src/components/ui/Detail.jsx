import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaBook, FaPaintBrush, FaTheaterMasks, FaDumbbell, FaBrain } from "react-icons/fa";

const stories = [
  {
    title: "Breaking Barriers in Science",
    icon: <FaBook className="text-yellow-500 text-5xl" />,
    description:
      "We don’t just teach science—we ignite curiosity. Instead of memorizing theories, our students step into the minds of scientists...",
    image: "/science.webp",
  },
  {
    title: "From Dusty Fields to Gold Medals",
    icon: <FaMedal className="text-yellow-500 text-5xl" />,
    description:
      "We let them flow—like the wind, like love, like passion—unbound and fearless in the game...",
    image: "/sports.webp",
  },
  {
    title: "Art that Speaks to the Soul",
    icon: <FaPaintBrush className="text-yellow-500 text-5xl" />,
    description:
      "Art is the one force that lets humanity transcend every boundary...",
    image: "/art.webp",
  },
  {
    title: "Theater & Poetry: Raising Voices",
    icon: <FaTheaterMasks className="text-yellow-500 text-5xl" />,
    description:
      "Words are both our weapons and our oxygen—the essence of expression...",
    image: "/acting.webp",
  },
  {
    title: "Building Strength: Physically & Mentally",
    icon: <FaDumbbell className="text-yellow-500 text-5xl" />,
    description:
      "Only a strong body can nurture a great mind. That’s why at Gurukulam...",
    image: "/yoga2.webp",
  },
  {
    title: "Cracking the Toughest Exams",
    icon: <FaBrain className="text-yellow-500 text-5xl" />,
    description:
      "Our kids may have been born into poverty, but they will not live in it...",
    image: "/science.webp",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full bg-[#00715D] text-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          Transforming Lives, One Success at a Time
        </h2>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 object-cover rounded-lg transition-transform transform group-hover:scale-105 duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {story.icon}
                  <h3 className="text-3xl font-semibold">{story.title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-200">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
