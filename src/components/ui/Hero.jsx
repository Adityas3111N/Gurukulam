import React from "react";
import { FaHandsHelping, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-[#fffaf4] overflow-hidden py-10 px-5 sm:px-8 md:px-12 font-sans"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-snug">
            Imagine a child’s eyes lighting up as they read their first book. <br className="hidden md:block" />
            <span className="text-[#00715D]">You can be the reason that happens.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            At <span className="font-semibold text-[#00715D]">Gurukulam</span>, we educate children forgotten by society. <strong>300+ students, 0 tuition fees, 100% impact.</strong>
            Our mission? To help them become doctors, IAS officers, and dreamers.
            <span className="font-semibold"> But we need your help. </span>
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-md transition w-full sm:w-auto"
            >
              <FaHandsHelping className="mr-2" />
              Volunteer & Change a Life
            </Link>

            <Link
              to="/donate"
              className="inline-flex items-center justify-center bg-[#00715D] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-800 shadow-md transition w-full sm:w-auto"
            >
              <FaHeart className="mr-2" />
              Donate & Make an Impact
            </Link>

          </div>

          <p className="mt-5 text-xs text-gray-600 font-semibold">
            ✅ 10,000+ lives impacted | 100% transparency | Urgent: 2,000+ children still need help
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#f7f0e8] w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/bachhe.png" // replace with a more impactful image
              alt="Children Learning"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section Separator - Smooth Wave */}
      <div className="relative">
        <svg className="absolute bottom-0 left-0 w-full h-24 text-[#fffaf4]" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,266.7C1120,288,1280,256,1360,240L1440,224V320H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
