import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/anishkumar4/",
      label: "LinkedIn",
    },
    {
      icon: <SiGmail className="w-5 h-5" />,
      href: "mailto:anishkuamrvir0@gmail.com",
      label: "Gmail",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/AnishKr-24",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Certification", href: "#Certification" },
    { name: "About", href: "#About" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About Me */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400">Anish Kumar</h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Junior Software Engineer crafting innovative solutions with modern technologies.
            Passionate about creating exceptional user experiences.
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map(({ icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            {quickLinks.map(({ name, href }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  ↗ {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> New Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +91 6200402982
            </li>
            <li className="flex items-center gap-2">
              <SiGmail className="text-blue-400" /> anishkuamrvir0@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get updates about new projects and opportunities.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-gray-900 w-full outline-none"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        <p>
          Crafted with <FaHeart className="inline text-red-500 animate-pulse mx-1" />
          by <span className="text-blue-400 font-medium">Anish Kumar</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}