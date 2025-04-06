import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaHeart,
    FaChalkboardTeacher,
    FaUserNurse,
    FaPalette,
    FaFutbol,
    FaBook,
    FaTheaterMasks,
    FaUserFriends,
    FaMicroscope,
} from "react-icons/fa";
import JoinFormModal from "./VolunteerForm.jsx"; // update path if needed
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import emailConfig from "../../Conf/Conf";
import { Helmet } from "react-helmet"; // make sure it's installed

const roles = [
    { type: "teacher", label: "As a Teacher", icon: <FaChalkboardTeacher />, desc: "Share your knowledge and mentor young minds." },
    { type: "scientist", label: "As a Scientist", icon: <FaMicroscope />, desc: "Inspire curiosity and lead them to discovery." },
    { type: "artist", label: "As an Artist", icon: <FaPalette />, desc: "Unlock their creativity through colors and expression." },
    { type: "sports", label: "As a Sports Coach", icon: <FaFutbol />, desc: "Build strength, confidence, and team spirit." },
    { type: "poet", label: "As a Poet", icon: <FaBook />, desc: "Help them express emotions through beautiful words." },
    { type: "actor", label: "As an Actor (Theater)", icon: <FaTheaterMasks />, desc: "Encourage performance and storytelling." },
    { type: "friend", label: "As a Friend", icon: <FaUserFriends />, desc: "Sometimes just being there is the most powerful gift." },
    { type: "caretaker", label: "As a Caretaker", icon: <FaUserNurse />, desc: "Support and nurture children who need extra love." },
];

const VolunteerPage = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("join") === "true") {
            setIsModalOpen(true);
        }
    }, [location]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSending) return;

        if (!formData.name || !formData.email) {
            toast.error("Please fill in all required fields.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            role: formData.role,
            message: formData.message,
        };


        try {
            setIsSending(true);
            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.volunteerTemplateId,
                templateParams,             // ✅ This is the missing piece
                emailConfig.publicKey       // ✅ This stays here
            );

            toast.success("Thanks for joining! We’ll get in touch soon.");
            setFormData({ name: "", email: "", message: "" });
            handleCloseModal();
        } catch (error) {
            console.error("Email sending failed:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#fffdf8] py-20 px-6 relative overflow-hidden">
            <Helmet>
                <title>Volunteer | Be the Reason a Child Smiles</title>
                <meta
                    name="description"
                    content="Join our mission to uplift kids by becoming a volunteer mentor, artist, coach or guide. Your time can change a life."
                />
            </Helmet>

            {/* Animated Background Hearts */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-10 left-10 text-pink-200 text-7xl opacity-10"
                >
                    <FaHeart />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    className="absolute bottom-10 right-10 text-yellow-300 text-8xl opacity-10 rotate-12"
                >
                    <FaHeart />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold text-[#003d30] leading-tight">
                        Become the Reason a Child Smiles
                    </h1>
                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                        Volunteering isn’t just a kind act—it’s a chance to change the trajectory of a child’s life,
                        and in return, transform your own. Choose your way to give love, time, and purpose.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.type}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-white border border-[#f0e9dd] p-6 rounded-3xl shadow-xl text-center text-[#2c2c2c] group transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between"
                        >

                            <div>
                                <div className="text-4xl mb-4 drop-shadow-lg text-[#00715D] group-hover:scale-110 transition-transform duration-300">
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#003d30] mb-2">{role.label}</h3>
                                <p className="text-gray-700 text-sm">{role.desc}</p>
                            </div>
                            <button
                                onClick={handleOpenModal}
                                className="cursor-pointer mt-6 inline-block text-center bg-yellow-400 text-[#003d30] px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
                            >
                                Join
                            </button>

                        </motion.div>
                    ))}
                </div>

                {/* Join Now button triggers the modal */}
                <div className="text-center">
                    <button
                        onClick={handleOpenModal}
                        aria-label="Join the mission as a volunteer"
                        className="cursor-pointer px-6 py-3 bg-yellow-400 text-[#003d30] font-bold rounded-full shadow hover:bg-yellow-500 transition"
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Just Want to Help? Join the Mission"}
                    </button>
                </div>
            </div>

            {/* Modal */}
            <JoinFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSending={isSending}
            />
        </section>
    );
};

export default VolunteerPage;
