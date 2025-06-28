import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendar } from "react-icons/fa";
import PropTypes from "prop-types";
import SEO from './SEO';
import { seoData } from '../config/seo';
import PortfolioImage from '../assets/image/Portfolio.png';
import DigitalyatraImage from '../assets/image/Digitalyatra.png';
// import WeatherImage from '../assets/image/Weather.png';
// import EventImage from '../assets/image/Event.png';

const projectsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardEntryVariants = {
  hidden: { opacity: 0, y: 70, rotateZ: -3, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 80,
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const ProjectCard = ({ image, title, description, githubLink, liveLink, date, tags, featured }) => (
  <motion.div
    variants={cardEntryVariants}
    className={`group relative isolate ${featured ? 'md:col-span-2' : ''}`}
  >
    <motion.div
      className="h-full overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur-md ring-1 ring-gray-800/90 transform transition-all duration-300"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 12px 45px rgba(30, 144, 255, 0.5)",
        rotateZ: 0.5,
        y: -5
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden relative rounded-2xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900/95 group-hover:via-gray-900/95 group-hover:to-black/95 transition-colors duration-300 rounded-2xl"
          ></div>
        </div>
      </div>

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            <motion.h3
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.85)] transition duration-300"
            >
              {title}
            </motion.h3>
            {featured && (
              <span className="px-3 py-1 text-xs font-medium text-blue-400 border border-blue-400 rounded-full whitespace-nowrap bg-blue-500/20">
                Featured
              </span>
            )}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={projectsContainerVariants}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                variants={tagVariants}
                className="px-3 py-1 text-xs font-medium text-blue-300 rounded-full border border-blue-600 bg-blue-700/10 hover:bg-gradient-to-r hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:text-white transition-all duration-500 ease-in-out"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaCalendar className="w-4 h-4 text-blue-500" />
            <span>{date}</span>
          </div>
          <ul className="space-y-3">
            {description.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3 group/item">
                <span className="text-blue-500 mt-1">•</span>
                <span className="group-hover/item:text-blue-300 transition-colors duration-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-medium transition-transform duration-150"
          >
            <FaGithub className="w-4 h-4" />
            View Code
          </motion.a>
          {liveLink && liveLink !== githubLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-sm font-medium transition-transform duration-150"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool,
};

export default function Projects() {
  const projectsData = [
    {
      image: PortfolioImage,
      title: "My Portfolio",
      description: [
        "Experienced in creating modern, responsive, and visually appealing web interfaces using HTML, Tailwind CSS, and best UI/UX practices to deliver seamless user experiences.",
        "Skilled in JavaScript and React.js for building dynamic, efficient, and scalable single-page applications, with a strong focus on component-based architecture and state management.",
        "Adept at collaborating with cross-functional teams to translate design concepts into fully functional web applications, maintaining code quality, performance optimization, and accessibility standards.",
      ],
      githubLink: "https://github.com/AnishKr-24/My_Portfolio",
      date: "February 2025",
      tags: ["React", "Redux", "Tailwind CSS", "UI/UX"],
      featured: false,
    },
    {
      image: DigitalyatraImage,
      title: "Digital Yatra",
      description: [
        "Developed the frontend of the Digi Yatra web application using React, JavaScript, and Tailwind CSS, enabling smooth flight search, passenger detail entry, seat selection, and self-check-in.",
        "JavaScript and React were used to implement real-time flight search and filtering functionality, allowing users to easily find flights based on criteria like date, destination, and airline",
        "Built responsive and reusable UI components to ensure a consistent and intuitive user experience across devices",
      ],
      githubLink: "https://github.com/AnishKr-24/DigitalYatraNew",
      date: "January 2025",
      tags: ["React", "Tailwind CSS", "Authentication"],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="Projects">
      <SEO
        title={seoData.projects.title}
        description={seoData.projects.description}
        name="@aashishgulshan"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Featured Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A curated collection of my professional work and personal projects,
            showcasing expertise in full-stack development, system design, and
            modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={projectsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
        >
          {projectsData.map((project) => (
            <div key={project.title} className="flex justify-center">
              <div className="w-full max-w-md">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
