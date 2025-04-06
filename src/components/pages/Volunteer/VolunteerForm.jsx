import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaLock,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const InputField = ({ Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003d30]" />
    <input
      {...props}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

const TrustBadges = () => (
  <div className="flex justify-around text-sm text-gray-600 mb-4 flex-wrap gap-2">
    <div className="flex items-center gap-2">
      <FaLock className="text-[#003d30]" /> Secure
    </div>
    <div className="flex items-center gap-2">
      <FaBolt className="text-[#003d30]" /> Fast Process
    </div>
    <div className="flex items-center gap-2">
      <FaHandshake className="text-[#003d30]" /> Real People
    </div>
  </div>
);

const JoinFormModal = ({
  isOpen,
  onClose,
  formData,
  handleChange,
  handleSubmit,
  isSending,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-2 py-4 sm:px-0"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl transition-colors duration-300 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#003d30] mb-1 text-center">
              Join Us & Make an Impact
            </h2>
            <p className="text-sm text-center text-gray-600 mb-4">
              We're always looking for passionate people. Let’s build something amazing together.
            </p>

            <TrustBadges />

            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputField
                Icon={FaUser}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                Icon={FaEnvelope}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                Icon={FaCommentDots}
                type="text"
                name="role"
                placeholder="Your Role (e.g., Video Editor, Marketer...)"
                value={formData.role}
                onChange={handleChange}
                required
              />
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-[#003d30]" />
                <textarea
                  name="message"
                  placeholder="Why do you want to join?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`cursor-pointer w-full bg-[#003d30] text-white py-3 rounded-xl font-semibold hover:bg-[#154734] transition-all flex items-center justify-center gap-2 ${
                  isSending && "opacity-60 cursor-not-allowed"
                }`}
              >
                <FaPaperPlane />
                {isSending ? "Sending..." : "Join Now"}
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                We usually reply within 48 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinFormModal;
