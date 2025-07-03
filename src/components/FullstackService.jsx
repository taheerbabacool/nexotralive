import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  Users,
  Server,
  CheckCircle,
  Settings,
  Layers,
  Monitor,
  Database,
  ArrowLeft,
} from "lucide-react";

import AppDevImg from "../assets/Appdevelopment.jpg";
import TLimg from "../assets/TL.png";
import TDiscussion from "../assets/TeamDiscussion.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50"
    >
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={AppDevImg}
          alt="App Development"
          className="w-full h-[250px] sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            App Development
          </h1>
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate("/ServicesSection")}
        className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm sm:text-base mt-6 ml-4 sm:ml-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Services
      </motion.button>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4">
            Unlock Streamlined Technical Excellence
          </h2>
          <p className="text-black text-base sm:text-lg max-w-2xl mx-auto">
            <span className="block mb-2">
              Dive into a realm where innovation meets precision and let us
              craft robust solutions that go
            </span>
            <span className="block">beyond meeting your needs.</span>
          </p>
        </div>

        {/* First Service Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={TLimg}
                alt="Team Leadership"
                className="w-full md:w-1/3 h-auto rounded-xl shadow-lg object-cover"
              />

              <motion.div
                variants={container}
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Settings,
                    title: "Strategic Development",
                    description:
                      "We craft innovative and strategic solutions to propel your business into the digital era.",
                  },
                  {
                    icon: Layers,
                    title: "Bespoke Development",
                    description:
                      "We tailor applications to your specific needs, ensuring they are unique and optimized for your operations.",
                  },
                  {
                    icon: Monitor,
                    title: "Innovative Prototyping",
                    description:
                      "We develop creative prototypes that align with user expectations and bring ideas to life.",
                  },
                  {
                    icon: Database,
                    title: "Scalable Architecture",
                    description:
                      "We build applications with scalable architecture for long-term growth and adaptability.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <service.icon className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Second Service Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <motion.div
                variants={container}
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Server,
                    title: "Extensive Technology Stack",
                    description:
                      "We have expertise across frontend, backend, and database technologies.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance Excellence",
                    description:
                      "Security and performance are guaranteed through rigorous QA processes.",
                  },
                  {
                    icon: Users,
                    title: "Human-Centered Design",
                    description:
                      "Our UX-first approach ensures satisfaction and usability at every step.",
                  },
                  {
                    icon: Eye,
                    title: "Project Insight & Delivery",
                    description:
                      "We deliver detailed technical blueprints and progress insights.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  >
                    <service.icon className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <img
                src={TDiscussion}
                alt="Discussion"
                className="w-full md:w-1/3 h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default WebDevelopment;
