// components/DonateForm.jsx
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaRupeeSign,
  FaCommentDots,
} from "react-icons/fa";

const InputField = ({ Icon, type, ...props }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003d30]" />
    <input
      type={type}
      inputMode={type === "number" ? "numeric" : undefined}
      pattern={type === "number" ? "[0-9]*" : undefined}
      {...props}
      className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
        type === "number"
          ? "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          : ""
      }`}
    />
  </div>
);

const DonateForm = ({ formData, handleChange }) => {
  return (
    <form className="space-y-6">
      <InputField
        Icon={FaUser}
        type="text"
        name="name"
        placeholder="Your Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputField
        Icon={FaEnvelope}
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        Icon={FaRupeeSign}
        type="number"
        name="amount"
        placeholder="Donation Amount (in ₹)"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <div className="relative">
        <FaCommentDots className="absolute left-4 top-4 text-[#003d30]" />
        <textarea
          name="message"
          placeholder="Leave a message of hope (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows="4"
        />
      </div>
    </form>
  );
};

export default DonateForm;
