import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaCoffee } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Junior Software Engineer",
      description: "Specializing in building scalable",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about turning complex challenges into elegant solutions",
    },
    {
      icon: <FaCoffee className="w-6 h-6" />,
      title: "Team Player",
      description: "Always eager to learn, collaborate, and share knowledge",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I&apos;m Anish Kumar, a Junior Software Engineer from Nalanda,
            India. I&apos;m passionate about crafting elegant solutions to
            complex problems and staying at the forefront of technology. When
            I&apos;m not coding, you&apos;ll find me exploring new
            technologies, sharing ideas, or enjoying a cup of coffee while
            solving interesting challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(168, 85, 247, 0.7)", // stronger purple-pink glow
                backgroundColor: "rgba(55, 65, 81, 0.95)", // darker gray background on hover
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative p-6 bg-gray-800 rounded-xl transition-all cursor-pointer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/anishkumar4/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center px-6 py-3 rounded-full
              bg-gradient-to-r from-purple-700 to-pink-700
              text-white font-medium
              hover:shadow-lg hover:shadow-pink-600/70
              active:scale-95
              transition-all duration-300
              cursor-pointer
            "
          >
            Let&apos;s Connect
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
