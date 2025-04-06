import React from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import {
    FaFlask,
    FaPalette,
    FaFutbol,
    FaAward,
    FaRupeeSign,
    FaArrowRight,
} from "react-icons/fa";

const programs = [
    {
        icon: <FaFlask />,
        title: "Science",
        color: "from-yellow-200 to-yellow-400",
        description: "Empower kids to innovate and explore through hands-on science projects and mentorship.",
    },
    {
        icon: <FaPalette />,
        title: "Arts",
        color: "from-pink-200 to-pink-400",
        description: "Unleash their imagination with support in drawing, theatre, music, and visual storytelling.",
    },
    {
        icon: <FaFutbol />,
        title: "Sports",
        color: "from-green-200 to-green-400",
        description: "Support rising athletes from underserved backgrounds—every kick, jump and goal counts.",
    },
    {
        icon: <FaAward />,
        title: "Competitions",
        color: "from-blue-200 to-blue-400",
        description: "Help children shine in olympiads, quizzes, and national-level competitions.",
    },
    {
        icon: <FaRupeeSign />,
        title: "Earning Money",
        color: "from-purple-200 to-purple-400",
        description: "Teach practical skills that help kids earn ethically, confidently, and early.",
    },
];

const ProgramCard = ({ icon, title, color, description }) => {
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl text-center text-[#2c2c2c] group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between`}
        >
            <div >
                <div className="text-5xl mb-4 drop-shadow-lg text-[#003d30] group-hover:scale-110 transition-transform duration-300 ">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-6">{description}</p>
            </div>

            <div className="flex flex-col gap-2 mb-4">
                <Link to="/volunteer">
                <button className="cursor-pointer bg-[#003d30] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#154734] transition-all">
                    Volunteer
                </button>
                </Link>
                <Link to="/donate">
                    <button className="cursor-pointer border border-[#003d30] text-[#003d30] rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#003d30] hover:text-white transition-all">
                        Donate
                    </button>
                </Link>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer text-sm text-[#003d30] font-semibold underline inline-flex items-center gap-2 hover:text-[#025947] transition-all"
            >
                See Our Success Stories <FaArrowRight className="text-xs" />
            </motion.button>
        </motion.div>
    );
};

const ProgramsSection = () => {
    return (
        <section className="py-20 px-6 sm:px-10 bg-[#fffdf8] text-center">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Empower A Child’s Future
            </motion.h2>

            <p className="text-[#444] text-md md:text-lg max-w-3xl mx-auto mb-14">
                Choose a cause close to your heart. Whether it's science, sports, or skills—your support gives children the chance to rise, explore, and thrive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {programs.map((prog, index) => (
                    <ProgramCard key={index} {...prog} />
                ))}
            </div>
        </section>
    );
};

export default ProgramsSection;
