import { motion } from "framer-motion";

const certifications = [
  {
    title: "SQL Dev Gym Certification",
    issuer: "Oracle",
    date: "April 2025",
    link: "https://drive.google.com/file/d/1dJdVlZDPqjqwUsW0c_7wsEImShIrzTfC/view?usp=sharing",
  },
  {
    title: "MongoDB Associate Developer Certification",
    issuer: "MongoDB",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1lkTATUng1q2fetW4qUa2WptyI01lqQhW/view?usp=sharing",
  },
];

export default function Certification() {
  return (
    <section className="bg-gray-950 py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl shadow-md p-6 hover:shadow-pink-500/30 transition duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="font-medium text-gray-300">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-300">Date:</span> {cert.date}
                </p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-600 transition duration-300"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
