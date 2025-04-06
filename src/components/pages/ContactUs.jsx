import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import emailConfig from "../Conf/Conf.js";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!formData.name || !formData.email || !formData.role || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.volunteerTemplateId,
        formData,
        emailConfig.publicKey
      );

      toast.success("Application submitted with love 💛");
      setFormData({ name: "", email: "", role: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fefcf5] via-[#fcf8e8] to-[#f9f1d8] py-20 px-6 relative">
      <Helmet>
        <title>Volunteer With Us | Gurukulam</title>
        <meta
          name="description"
          content="Want to make an impact? Join the Gurukulam mission and volunteer with us to bring change."
        />
      </Helmet>

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto bg-white px-6 py-10 rounded-2xl shadow-xl border border-[#f3eee0]"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#2e3929] mb-2"
        >
          Volunteer With Us
        </motion.h2>
        <p className="text-center text-[#4f4f4f] max-w-md mx-auto mb-8 text-base">
          Help us build a better future. Your passion can change lives.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <UserIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name ✨"
              className="w-full pl-10 pr-4 py-3 border border-[#e2dfd3] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com 📬"
              className="w-full pl-10 pr-4 py-3 border border-[#e2dfd3] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            />
          </div>

          {/* Role */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="What role are you excited about? 🎯"
              className="w-full pl-10 pr-4 py-3 border border-[#e2dfd3] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <div className="absolute top-3 left-3">
              <PencilIcon className="w-5 h-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder='Why do you want to volunteer with Gurukulam? 📝'
              className="w-full pl-10 pr-4 py-3 border border-[#e2dfd3] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className="cursor-pointer bg-yellow-400 text-[#2f3627] px-8 py-2.5 rounded-full font-medium hover:bg-yellow-500 transition-all duration-300 shadow flex items-center justify-center gap-2 mx-auto"
            >
              {isSending ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-[#2f3627]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Sending your spirit...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-2 italic">
              We’re honored to receive your message 💚
            </p>
          </div>
        </form>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mt-12 px-4"
      >
        <p className="italic text-[#4b4b4b] text-sm sm:text-base">
          “Volunteering is the ultimate exercise in democracy. You vote in elections once a year,
          but when you volunteer, you vote every day about the kind of community you want to live in.”
        </p>
        <p className="mt-2 text-[#2f3627] font-semibold">— Team Gurukulam 💛</p>
      </motion.div>
    </section>
  );
};

export default ContactUs;
