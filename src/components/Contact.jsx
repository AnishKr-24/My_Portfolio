import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ContactCard = ({ icon: Icon, title, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="block"
  >
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-colors duration-300">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-600">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
      </div>
    </div>
  </motion.a>
);

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      title: "Send Email",
      link: "mailto:anishkumarvir0@gmail.com",
    },
    {
      icon: FaLinkedin,
      title: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/anishkumar4/",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Mobile",
      link: "tel:+91 6200402982", // replace with your actual number
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <ContactCard key={contact.title} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
}
