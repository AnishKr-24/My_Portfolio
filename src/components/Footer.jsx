import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/anishkumar4/",
    label: "LinkedIn",
  },
  {
    icon: SiGmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=anishkuamrvir0@gmail.com",
    label: "Gmail",
  },
  {
    icon: FaGithub,
    href: "https://github.com/AnishKr-24",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-2">
              Crafted with{" "}
              <FaHeart className="inline-block w-4 h-4 text-pink-500 animate-pulse" />{" "}
              in India by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-medium">
                Anish Kumar
              </span>
            </p>
            <p className="text-gray-400 text-sm">
              No copyright—feel free to copy! Ping me if you need any help
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
