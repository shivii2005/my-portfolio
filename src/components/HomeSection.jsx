import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/space-dev.json";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#F8F8F8] to-[#EDEDED] dark:from-[#111111] dark:to-[#1a1a1a] min-h-screen flex items-center justify-center px-4 py-12 font-inter transition-colors duration-500">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">

        {/* ✅ Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center -mt-8 sm:-mt-12">
          <div className="ml-6 sm:ml-8 md:ml-12 lg:ml-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[100px] sm:text-[130px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-extralight leading-tight text-[#222222] dark:text-white">
                Hello
              </p>
              <p className="text-[#7B7B7B] dark:text-gray-400 text-xl sm:text-2xl -mt-5">
                — I’m <span className="text-[#222222] dark:text-white font-semibold">Shivangi Goutam</span>
              </p>
            </motion.div>

            {/* ✅ Typewriter */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 text-[#222222] dark:text-white text-lg sm:text-xl font-medium"
            >
              <Typewriter
                words={["Frontend Developer", "UI/UX Designer", "React Enthusiast", "Tech Explorer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div> */}

            {/* ✅ Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-6 mt-8 text-2xl"
            >
              <a
                href="https://github.com/shivii2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shivangi-goutam-b2b102290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/imshivii__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:shivangigoutam06.com"
                className="text-black dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </motion.div>

            {/* ✅ Download CV Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6"
            >
              {/* <a
                href="/Resume.pdf"
                download
                className="text-sm sm:text-base bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium border border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-inherit dark:hover:text-inherit transition-all duration-300 shadow-md inline-flex items-center gap-2"
              >
                <FaDownload className="text-base" />
                Download CV
              </a> */}
            </motion.div>
          </div>
        </div>

        {/* ✅ Right Side: Lottie Animation */}
        <div className="w-full lg:w-[40%] flex items-center justify-center mb-[5%]">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-[320px] sm:w-[440px] md:w-[520px] lg:w-[600px] xl:w-[640px] h-auto -mt-4 translate-x-2"
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
