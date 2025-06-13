import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendar } from "react-icons/fa";
import PropTypes from "prop-types";
import SEO from './SEO';
import { seoData } from '../config/seo';

const ProjectCard = ({ image, title, description, githubLink, liveLink, date, tags, featured }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`group relative isolate ${featured ? 'md:col-span-2' : ''}`}
  >
    <div
      className="h-full overflow-hidden rounded-2xl bg-gray-900/70 backdrop-blur-md ring-1 ring-gray-800/90
      hover:ring-purple-700 hover:shadow-2xl shadow-lg
      transform hover:-translate-y-3 hover:rotate-1
      transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden relative rounded-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900/95
            group-hover:via-gray-900/95 group-hover:to-black/95 transition-colors duration-300 rounded-2xl"
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            <h3
              className="text-xl md:text-2xl font-bold text-white
              group-hover:text-purple-400
              group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.85)]
              transition duration-300"
            >
              {title}
            </h3>
            {featured && (
              <span className="px-3 py-1 text-xs font-medium text-purple-400 border border-purple-400 rounded-full whitespace-nowrap bg-purple-500/20">
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-purple-300 rounded-full border border-purple-600
                bg-purple-700/10
                hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-600 hover:to-purple-700
                hover:text-white transition-all duration-500 ease-in-out"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaCalendar className="w-4 h-4 text-purple-500" />
            <span>{date}</span>
          </div>
          <ul className="space-y-3">
            {description.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3 group/item">
                <span className="text-purple-500 mt-1">•</span>
                <span className="group-hover/item:text-purple-300 transition-colors duration-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-700 hover:bg-purple-800 active:scale-95
            text-white rounded-lg text-sm font-medium transition-transform duration-150"
          >
            <FaGithub className="w-4 h-4" />
            View Code
          </a>
          {liveLink && liveLink !== githubLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-pink-700 hover:bg-pink-800 active:scale-95
              text-white rounded-lg text-sm font-medium transition-transform duration-150"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool,
};

export default function Projects() {
  const projectsData = [
    {
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "My Portfolio",
      description: [
        "Experienced in creating modern, responsive, and visually appealing web interfaces using HTML, Tailwind CSS, and best UI/UX practices to deliver seamless user experiences.",
        "Skilled in JavaScript and React.js for building dynamic, efficient, and scalable single-page applications, with a strong focus on component-based architecture and state management.",
        "Adept at collaborating with cross-functional teams to translate design concepts into fully functional web applications, maintaining code quality, performance optimization, and accessibility standards.",
      ],
      githubLink: "https://github.com/AnishKr-24/My_Portfolio",
      date: "Fabuary 2025",
      tags: ["React", "Redux", "Tailwind CSS", "UI/UX"],
      featured: false,
    },

     {
      image:
        "https://images.unsplash.com/photo-1592589185394-1849d2e75d75?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    {
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Weather App",
      description: [
        "Built a web application using Spring Boot to retrieve and display real-time weather data for any city using the OpenWeatherMap API.",
        "Integrated Thyme leaf for dynamic UI rendering and used Rest Template for consuming RESTful API services",
        "Utilized Java, Spring Boot, Maven, HTML/CSS, and the OpenWeatherMap API to deliver a responsive and user-friendly weather dashboard.",
      ],
      githubLink: "https://github.com/AnishKr-24/Weather-Application",
      date: "April 2025",
      tags: ["HTML", "CSS", "Thymeleaf", "Spring Boot", "Spring MVC", "Weather Api"],
      featured: false,
    },
   
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Event Management System",
      description: [
        "Built a full-stack Event Management System using the MERN stack (MongoDB, Express.js, React, Node.js) as part of a 4-member team, enabling event creation, user registration, and real-time attendee tracking",
        "Developed responsive and interactive UI components using React, ensuring a seamless user experience for organizers and participants across devices.",
        "Collaborated on backend development with Express.js and MongoDB, implementing RESTful APIs, user authentication, and efficient data handling for smooth system performance.",
      ],
      githubLink: "https://github.com/AnishKr-24/Event_Mern_stack_Project",
      date: "March 2024",
      tags: ["React", "MongoDB", "Node.js", "Express.js"],
      featured: false,
    },
  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="Projects">
      <SEO
        title={seoData.projects.title}
        description={seoData.projects.description}
        name="@aashishgulshan"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A curated collection of my professional work and personal projects,
            showcasing expertise in full-stack development, system design, and
            modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
