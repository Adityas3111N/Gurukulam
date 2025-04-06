import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaLightbulb,
    FaOm,
    FaHandsHelping,
    FaLeaf,
    FaDumbbell,
    FaUserShield,
    FaFacebookF
} from "react-icons/fa";
import WorriersCard from "../ui/WorriersCard"; // adjust path if needed

const warriors = [
    {
        image: "/logo.jpg",
        title: "Ravi Bhaiya",
        subtitle: "From slums to scholar",
        description:
            "Ravi used to sell vegetables to fund his books. Today, he teaches physics at Gurukulam, guiding kids from similar backgrounds.",
        icon: <FaUserShield />,
        linkedin: "https://www.linkedin.com/in/ravi-bhaiya",
        instagram: "https://www.instagram.com/ravi.bhaiya",
        facebook: "https://www.facebook.com/ravi.bhaiya",
    },
    {
        image: "/youngWomen.jpg",
        title: "Anjali Didi",
        subtitle: "Fought patriarchy with poetry",
        description:
            "Anjali writes poems that light up the hearts of girls who were once told not to dream. Now she runs our literature program.",
        icon: <FaUserShield />,
        linkedin: "https://www.linkedin.com/in/anjali-didi",
        instagram: "https://www.instagram.com/anjali.didi",
        facebook: "https://www.facebook.com/anjali.didi",
    },

];

const AboutUs = () => {
    return (
        <section className="w-full bg-[#003D30] text-white py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute text-yellow-400 text-[150px] top-10 left-10 opacity-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                >
                    <FaLightbulb />
                </motion.div>
                <motion.div
                    className="absolute text-yellow-400 text-[120px] top-1/2 right-12 opacity-10"
                    animate={{ x: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                >
                    <FaOm />
                </motion.div>
                <motion.div
                    className="absolute text-yellow-400 text-[100px] bottom-20 left-1/4 opacity-10"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 7 }}
                >
                    <FaLeaf />
                </motion.div>
                <motion.div
                    className="absolute text-yellow-400 text-[100px] top-1/3 left-1/2 opacity-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 9 }}
                >
                    <FaHandsHelping />
                </motion.div>
                <motion.div
                    className="absolute text-yellow-400 text-[120px] bottom-10 right-1/4 opacity-10"
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 12 }}
                >
                    <FaDumbbell />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto space-y-24 relative z-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-4 text-yellow-400">We Change Lives.</h2>
                    <h3 className="text-2xl font-light text-gray-200">
                        Of the kids who never thought they could study.
                    </h3>
                </div>

                {/* Vision Paragraph */}
                <motion.p
                    className="text-lg md:text-xl leading-relaxed text-center text-gray-300 max-w-4xl mx-auto font-light"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    At <span className="text-yellow-400 font-semibold">Gurukulam</span>, our vision goes beyond just teaching. We aim to completely transform the current education system, especially the commercialization of learning. We're bringing back the spirit of our ancient culture — where gurus taught not for money, but to guide students from the darkness of ignorance to the light of knowledge.
                    <br /><br />
                    Our students grow strong — mentally and physically — through daily yoga, meditation, gym workouts, and in-house sports. We ignite curiosity, not cram content. Once the mind is curious, learning becomes self-driven, joyful, and permanent.
                </motion.p>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.img
                        src="/yoga2.jpg"
                        alt="Kids doing yoga"
                        className="rounded-lg shadow-lg object-cover h-72 w-full"
                        whileHover={{ scale: 1.03 }}
                    />
                    <motion.img
                        src="/science.jpg"
                        alt="science experiments"
                        className="rounded-lg shadow-lg object-cover h-72 w-full"
                        whileHover={{ scale: 1.03 }}
                    />
                    <motion.img
                        src="/art.jpg"
                        className="rounded-lg shadow-lg object-cover h-72 w-full"
                        whileHover={{ scale: 1.03 }}
                    />
                </div>

                {/* Warriors Section */}
                <div className="text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">Warriors With Us</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        These are the souls who stood by us when the system tried to crush dreams. They are not just our mentors—they are warriors who showed us how to fight back with grace, grit, and love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {warriors.map((warrior, index) => (
                        <WorriersCard
                            key={index}
                            image={warrior.image}
                            title={warrior.title}
                            subtitle={warrior.subtitle}
                            description={warrior.description}
                            icon={warrior.icon}
                            linkedin={warrior.linkedin}
                            instagram={warrior.instagram}
                            facebook={warrior.facebook}
                        />
                    ))}
                </div>

                {/* Founder Section */}
                <div className="text-center space-y-12 mt-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-yellow-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Meet The Heart Behind Gurukulam
                    </motion.h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <motion.img
                            src="/logo.jpg" // Replace with real image
                            alt="Founder"
                            className="w-64 h-64 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />

                        <motion.div
                            className="max-w-xl text-left text-gray-200 space-y-4"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300">Uddeshya Sachan</h3>
                            <p className="text-lg leading-relaxed font-light">
                                I was once one of those kids—lost, unsure, told to just "follow the crowd." But deep down, I believed there had
                                to be more. Not just education, but purpose. Not just success, but meaning.
                            </p>
                            <p className="text-lg leading-relaxed font-light">
                                Gurukulam was born not from strategy, but from struggle. From sleepless nights, burning questions, and a
                                yearning to change how this country sees potential. Every child deserves more than rote learning—they deserve a
                                spark.
                            </p>
                            <p className="text-lg font-semibold text-yellow-400">Let’s bring back that spark—together.</p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                <Link
                                    to="/donate"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
                                >
                                    Join Our Mission
                                </Link>
                                <Link
                                    to="/volunteer"
                                    className="border border-yellow-300 hover:bg-yellow-300 hover:text-black text-yellow-300 font-medium py-2 px-6 rounded-full transition duration-300"
                                >
                                    Become a Volunteer
                                </Link>
                                <a
                                    href="#contact" // Replace with your route or scroll target
                                    className="text-white border border-white hover:bg-white hover:text-black font-medium py-2 px-6 rounded-full transition duration-300"
                                >
                                    Talk to the Founder
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </div>


        </section>
    );
};

export default AboutUs;
