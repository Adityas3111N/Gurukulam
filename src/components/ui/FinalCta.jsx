import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaHandsHelping } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      className="relative bg-[#fffaf4] overflow-hidden py-16 px-6 sm:px-10 md:px-16 font-sans"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-snug">
            End their wait. <br className="hidden md:block" />
            <span className="text-[#00715D]">Be their turning point.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Thousands of children still wait for a miracle. For them, <strong>you</strong> are that miracle.
            Help us turn dreams into degrees, hunger into hope, and silence into song.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-md transition w-full sm:w-auto"
            >
              <FaHandsHelping className="mr-2" />
              Join the Movement
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center bg-[#00715D] text-white hover:bg-green-800 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition w-full sm:w-auto"
            >
              <FaHeart className="mr-2" />
              Donate Now
            </Link>
          </div>

          <p className="mt-5 text-xs text-gray-600 font-semibold">
            ❤️ 2,000+ children still waiting for a seat at Gurukulam.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#f7f0e8] max-w-sm md:max-w-md w-full">
            <img
              src="/collage.webp"
              alt="Child with hope"
              loading="lazy"
              className="w-full h-auto object-cover"
            />

          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative mt-12">
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-[#fffaf4]"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,96L80,112C160,128,320,160,480,186.7C640,213,800,235,960,213.3C1120,192,1280,128,1360,96L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
