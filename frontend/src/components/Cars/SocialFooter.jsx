import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/tarun_tyagiiiii/",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/kunal.tyagi.ji.2025",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/tarun-tyagi-tt001",
    color: "from-sky-500 to-blue-700",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/taruntyagi01",
    color: "from-gray-400 to-gray-700",
  },
];

const SocialFooter = () => {
  return (
    <footer className="relative mt-24 sm:mt-32 border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden">
      {/* Glow line */}
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-red-500 via-white to-cyan-400" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xl sm:text-2xl
                            p-3 sm:p-4
                            rounded-full
                            bg-linear-to-br ${social.color}
                            text-black
                            shadow-lg shadow-white/10
                            touch-manipulation`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Text */}
          <div className="text-center text-gray-400 text-xs sm:text-sm px-2">
            <p className="tracking-widest uppercase text-[10px] sm:text-xs mb-2">
              Built with ❤️ & Horsepower
            </p>
            <p className="leading-relaxed">
              © {new Date().getFullYear()} Tarun Tyagi · Automotive Legends
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SocialFooter;
