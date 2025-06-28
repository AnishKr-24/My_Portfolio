import { motion } from "framer-motion";
import Photo from "../assets/image/Photo.jpg";
import { FaGithub, FaLinkedin, FaHackerrank, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Homepage() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/AnishKr-24", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/anishkumar4/", label: "LinkedIn" },
    { icon: <FaHackerrank size={24} />, url: "https://www.hackerrank.com/profile/anishkumar5", label: "HackerRank" },
    { icon: <FaTwitter size={24} />, url: "https://x.com/AnishKumar70923", label: "Twitter" },
  ];

  const intro = "Hi there! I'm".split("");
  const name = "ANISH KUMAR".split("");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      id="Homepage"
      className="min-h-screen bg-gray-900 text-white pt-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

            {/* Animated "Hi there! I'm" */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400 flex flex-wrap justify-center lg:justify-start"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
            >
              {intro.map((char, i) => (
                <motion.span key={i} variants={letterVariant}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Animated Name (smaller size) */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-500 to-cyan-500 flex flex-wrap justify-center lg:justify-start"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
            >
              {name.map((char, i) => (
                <motion.span key={i} variants={letterVariant} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-medium">
                A <strong className="text-cyan-400">Junior Software Engineer</strong> passionate about emerging technologies and crafting scalable digital solutions.
              </span>
            </p>

            <p className="text-md text-gray-400 max-w-xl mx-auto lg:mx-0">
              Combining creativity with code to develop beautiful, performant, user‑focused experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1Ob_v0KxEcxBnJ65JPk-yyr4ESomhN-6k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold
                           shadow-md hover:from-blue-700 hover:to-cyan-700 hover:shadow-cyan-500/40 transition duration-300"
              >
                Download Resume
              </a>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-400 font-semibold
                           hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center lg:justify-start mt-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform
                             hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-600 rounded-full blur-2xl
                           opacity-30 group-hover:opacity-50 transition duration-500"
              ></motion.div>
              <img
                src={Photo}
                alt="Anish Kumar"
                className="relative w-full h-full object-cover rounded-full shadow-xl border-4 border-blue-600/40
                           transform transition duration-500 group-hover:scale-105 group-hover:shadow-blue-600/40"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}