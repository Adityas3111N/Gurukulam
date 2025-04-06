import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[#fffaf4] py-10 px-5 sm:px-8 md:px-12 font-sans overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2c2c2c] leading-snug">
            Imagine a child’s eyes lighting up as they read their first book. <br className="hidden md:block" />
            <span className="text-[#00715D]">You can be the reason that happens.</span>
          </h1>

          <p className="mt-4 text-base text-gray-700 max-w-lg mx-auto md:mx-0">
            At <span className="font-semibold text-[#00715D]">Gurukulam</span>, we educate children forgotten by society. <strong>300+ students, 0 tuition fees, 100% impact.</strong>
            Our mission? To help them become doctors, IAS officers, and dreamers.
            <span className="font-semibold"> But we need your help. </span>
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <Link
              to="/volunteer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-md transition w-full sm:w-auto"
            >
              🤝 Volunteer & Change a Life
            </Link>
            <Link
              to="/donate"
              className="bg-[#00715D] hover:bg-green-800 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition w-full sm:w-auto"
            >
              ❤️ Donate & Make an Impact
            </Link>
          </div>

          <p className="mt-5 text-xs text-gray-600 font-semibold">
            ✅ 10,000+ lives impacted | 100% transparency | Urgent: 2,000+ children still need help
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/bachhe.webp"
            alt="Children Learning"
            loading="lazy"
            className="rounded-2xl shadow-md border border-[#f7f0e8] w-full max-w-sm"
          />
        </div>
      </div>

      {/* Wave */}
      <svg className="w-full h-20 text-[#fffaf4]" viewBox="0 0 1440 320">
        <path fill="currentColor" d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,266.7C1120,288,1280,256,1360,240L1440,224V320H0Z"></path>
      </svg>
    </section>
  );
};

export default HeroSection;
