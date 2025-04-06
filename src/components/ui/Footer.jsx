import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white px-6 sm:px-10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">About Gurukulam</h3>
          <p className="text-sm text-gray-300 leading-6">
            Gurukulam is a non-profit school providing free quality education to over 300 children, powered by love, knowledge, and your support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FDD65B] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FDD65B] transition">About</Link></li>
            <li><Link to="/memories" className="hover:text-[#FDD65B] transition">Memories</Link></li>
            <li><Link to="/programs" className="hover:text-[#FDD65B] transition">What’s Happening</Link></li>
            <li><Link to="/contact" className="hover:text-[#FDD65B] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2 hover:text-[#FDD65B] transition">
              <FaMapMarkerAlt className="mt-1" />
              <a
                href="https://www.google.com/maps/dir//Hanspuram,+Kanpur,+Uttar+Pradesh+208021/@26.3822408,80.253771,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399c47355d1e7f4f:0xe897ab1adbc4b5d1!2m2!1d80.3361725!2d26.3822644?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FDD65B] transition"
              >
                <span>Hanspuram, Kanpur - 208021</span>
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FDD65B] transition">
              <FaPhoneAlt />
              <a
                href="tel:+916388023523"
                className="hover:underline"
              >
                +91-6388023523
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FDD65B] transition">
              <FaEnvelope />
              <span>contact@gurukulam.org</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg text-white">
            <a
              href="https://www.instagram.com/gurukulam_khusiyonwalaschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#FDD65B] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/gurukulam_kws"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#FDD65B] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/people/Gurukulam-khushiyon-vala-school/100071908592551/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#FDD65B] transition"
            >
              <FaFacebook />
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

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <span>© {new Date().getFullYear()} Gurukulam Foundation. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500" /> by{" "}
          <a
            href="https://www.linkedin.com/in/aditya-singh-0a7181349"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDD65B] hover:underline font-medium"
          >
            Aditya Singh
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
