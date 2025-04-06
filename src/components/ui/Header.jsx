import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaHandsHelping,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const green = "#00715D";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-white text-sm py-2 px-4 sm:px-6 md:px-10 border-b">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 items-center text-gray-600 justify-center sm:justify-start text-xs sm:text-sm">
            <a
              href="https://www.google.com/maps/dir//Hanspuram,+Kanpur,+Uttar+Pradesh+208021/@26.3822408,80.253771,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c47355d1e7f4f:0xe897ab1adbc4b5d1!2m2!1d80.3361725!2d26.3822644?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FDD65B] transition"
            >
              <IoLocationOutline style={{ color: green }} />
              <span>Hanspuram, Kanpur - 208021</span>
            </a>

            <div className="flex items-center gap-1.5">
              <FiPhone style={{ color: green }} />
              <span>+91-6388023523</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiMail style={{ color: green }} />
              <span>contact@gurukulam.org</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500 text-base justify-center">
            <a
              href="https://www.instagram.com/gurukulam_khusiyonwalaschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#FDD65B] transition"
            >              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/uddeshya.sachan.507/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#FDD65B] transition"
            >              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/uddeshyasachan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#FDD65B] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="py-4 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-[#00715D]">Gurukulam</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-gray-700 font-medium text-sm">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <Link to="/about" className="hover:text-green-600 transition">About</Link>
            <Link to="/programs" className="hover:text-green-600 transition">Programs</Link>
            <Link to="/memories" className="hover:text-green-600 transition">Memories</Link>
            <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/volunteer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
            >
              <FaHandsHelping />
              Join Us
            </Link>
            <Link
              to="/donate"
              className="bg-[#00715D] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-green-800 transition"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-700"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          <nav className="mt-10 space-y-4 text-gray-700 text-sm font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">About</Link>
            <Link to="/programs" onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">Programs</Link>
            <Link to="/memories" onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">Memories</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">Contact</Link>
            <Link
              to="/volunteer"
              onClick={() => setMenuOpen(false)}
              className="block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-semibold w-max"
            >
              Join Us
            </Link>
            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="block bg-[#00715D] text-white px-5 py-2 rounded-full text-xs font-semibold w-max hover:bg-green-800"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
