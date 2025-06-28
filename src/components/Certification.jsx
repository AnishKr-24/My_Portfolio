import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "SQL Dev Gym Certification",
    issuer: "Oracle",
    date: "April 2025",
    link: "https://drive.google.com/file/d/1dJdVlZDPqjqwUsW0c_7wsEImShIrzTfC/preview",
  },
  {
    title: "MongoDB Associate Developer Certification",
    issuer: "MongoDB",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1lkTATUng1q2fetW4qUa2WptyI01lqQhW/preview",
  },
  {
    title: "AI Associate Developer Certification",
    issuer: "Salesforce",
    date: "October 2024",
    link: "https://drive.google.com/file/d/10gXWoktmGsANvW8j-tygTuaO0ce8gOnh/view?usp=sharing", // original link
  },
];

export default function Certification() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const handleShowModal = (pdfLink) => {
    // Ensure preview format
    const previewLink = pdfLink.includes("/view")
      ? pdfLink.replace("/view", "/preview")
      : pdfLink;
    setSelectedPdf(previewLink);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPdf("");
  };

  return (
    <section id="Certification" className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
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
              className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl shadow-md p-6 hover:shadow-cyan-700/70 hover:bg-gray-800 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="font-medium text-gray-300">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-300">Date:</span> {cert.date}
                </p>
              </div>
              <button
                onClick={() => handleShowModal(cert.link)}
                className="mt-6 w-full text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-cyan-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-cyan-600/80 active:scale-95 transition-all duration-300"
              >
                Preview Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl max-w-3xl w-full mx-4 relative shadow-lg overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
              <h3 className="text-lg font-semibold">Certificate Preview</h3>
              <button
                onClick={handleCloseModal}
                className="text-white hover:text-red-400 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              {selectedPdf ? (
                <iframe
                  src={`${selectedPdf}#toolbar=0&navpanes=0`}
                  title="Certificate"
                  className="w-full h-[500px] border-none"
                  allowFullScreen
                />
              ) : (
                <p className="text-center text-gray-700">PDF could not be loaded.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}