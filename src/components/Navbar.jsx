import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "Homepage" },
    { name: "Project", to: "Projects" },
    { name: "Skills", to: "Skills" },
    { name: "Certification", to: "Certification" },
    { name: "About", to: "About" },
    { name: "Contact", to: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="Homepage"
              spy={true}
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            >
              <span className="hidden lg:inline">Anish Kumar</span>
              <span className="lg:hidden">AN</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200"
                    activeClass="text-purple-400"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200"
              activeClass="text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
