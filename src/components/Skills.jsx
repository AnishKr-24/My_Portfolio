import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiGithubactions,
  SiFirebase,
  SiSpringboot
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: SiCplusplus, title: "C++", color: "#00599C" },
        { icon: FaJava, title: "Java", color: "#3776AB" },
        { icon: FaJs, title: "JavaScript", color: "#F7DF1E" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { icon: FaHtml5, title: "HTML", color: "#E34F26" },
        { icon: FaCss3Alt, title: "CSS3", color: "#1572B6" },
        { icon: FaReact, title: "React", color: "#61DAFB" },
        { icon: SiTailwindcss, title: "Tailwind", color: "#06B6D4" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: FaNode, title: "Node.js", color: "#339933" },
        { icon: SiSpringboot, title: "Spring Boot", color: "#000000" },
        { icon: SiMysql, title: "MySQL", color: "#4479A1" },
        { icon: SiPostgresql, title: "PostgreSQL", color: "#4169E1" },
        { icon: SiMongodb, title: "MongoDB", color: "#47A248" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { icon: FaGithub, title: "GitHub", color: "#181717" },
        { icon: SiGithubactions, title: "GitHub Actions", color: "#2088FF" },
        { icon: DiVisualstudio, title: "VS Code", color: "#007ACC" },
        { icon: FaHackerrank, title: "HackerRank", color: "#00EA64" }
      ]
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { icon: SiNetlify, title: "Netlify", color: "#00C7B7" },
        { icon: SiVercel, title: "Vercel", color: "#000000" },
        { icon: SiFirebase, title: "Firebase", color: "#FFCA28" },
      ]
    }
  ];

  // Variants for staggering the main skill categories
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger each category card
      }
    }
  };

  // Variants for individual skill category cards (the larger boxes)
  const categoryCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  // Variants for individual skill items (the smaller boxes within categories)
  const skillItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            A comprehensive overview of my technical expertise and the tools I use to build modern applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants} // Applies stagger to category cards
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryCardVariants} // Entry animation for each category card
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-500/10 transition duration-300 hover:bg-gray-900/70 hover:scale-[1.03]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }} // Added for subtle click feedback
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants} // Re-using containerVariants for stagger within this category
                initial="hidden"
                // The 'animate' property is implicitly handled by the parent's 'whileInView' and 'containerVariants'
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={skillItemVariants} // Entry animation for each individual skill item
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 8px 30px ${skill.color}CC`,
                    }}
                    whileTap={{ scale: 0.95 }} // Added for subtle click feedback
                    className="flex flex-col items-center gap-3 p-4 bg-gray-700/30 rounded-lg transition duration-300 hover:bg-gray-900/70"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                    </div>
                    <p className="text-sm font-medium text-gray-300">{skill.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}