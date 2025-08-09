import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import AboutImage from "../assets/profile2.jpg";
import { DownloadIcon } from "lucide-react";




const AboutContent = () => {
    return (
        <div className="relative bg-gradient-to-br from-[#EDEDED] to-[#F8F8F8] dark:from-[#111111] dark:to-[#1a1a1a] text-[#222222] dark:text-white min-h-screen w-full px-4 py-12 font-inter transition-colors duration-500">

            {/* ✅ Top Heading (independent) */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full text-center mb-16"
            >
                <p className="text-sm text-[#7B7B7B] dark:text-gray-400 tracking-widest">
                    Get to know more
                </p>
                <h1 className=" font-inter text-4xl sm:text-5xl font-medium text-[#222222] dark:text-white">
                    About Me
                </h1>
                <div className="mt-2 h-[3px] w-12 bg-[#7B7B7B] mx-auto rounded-full" />
            </motion.div>

            {/* ✅ Flexbox Two-Column Layout */}
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between">

                {/* ✅ Left Column - Image */}
                {/* <div className="w-full lg:w-[40%] flex items-center justify-center mb-[5%]">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="w-[420px] sm:w-[500px] md:w-[560px] lg:w-[600px] xl:w-[640px] h-auto -mt-4 translate-x-2"
                    >
                        <Lottie animationData={animationData} loop={true} />
                    </motion.div>
                </div> */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="w-[300px] sm:w-[320px] md:w-[340px] h-[280px] sm:h-[300px] md:h-[320px] rounded-3xl overflow-hidden shadow-lg border border-[#B6B09F]">
                        <img src={AboutImage} alt="about" className="w-full h-full object-cover" />
                    </div>


                </motion.div>

                {/* ✅ Right Column - Cards + Description */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex flex-col gap-8"
                >

                    {/* Cards Section */}
                    <div className="flex flex-wrap gap-6">
                        {/* Social Card */}
                        <div className="flex-1 min-w-[240px] border border-[#B6B09F] rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <FaBriefcase className="text-xl text-[#000] dark:text-[#fff]" />
                                <h3 className="font-semibold text-lg">Location</h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#444] dark:text-gray-300">
                                {/* <FaMapMarkerAlt className="text-[#B6B09F]" /> */}
                                <span>Dehri-On-Sone, Rohtas, Bihar</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#444] dark:text-gray-300 mt-2">
                                {/* <FaPhoneAlt className="text-[#B6B09F]" /> */}
                                <span>India</span>
                            </div>
                        </div>


                        {/* Education Card */}
                        <div className="flex-1 min-w-[240px] border border-[#B6B09F] rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <FaGraduationCap className="text-xl text-[#000] dark:text-[#fff]" />
                                <h3 className="font-semibold text-lg">Education</h3>
                            </div>
                            <p className="text-sm text-[#444] dark:text-gray-300">Bachelor Of Technology</p>
                            <p className="text-sm text-[#444] dark:text-gray-300">IIITV-ICD</p>
                        </div>


                    </div>


                    {/* Description Section */}
                    <p className="font-inter text-base sm:text-lg text-[#555] dark:text-gray-300">
                        I am a React frontend developer and I create responsive websites that blend design and function.
                        I enjoy turning ideas into reality in the browser.
                    </p>
                    {/* ✅ Social Icons + Download Button in a Row */}
                    <div className="flex flex-wrap items-center gap-6 mt-6 text-2xl">
                        <a
                            href="https://github.com/shivii2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#222] dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shivangi-goutam-b2b102290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#222] dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com/imshivii__"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#222] dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="mailto:shivangigoutam06@gmail.com"
                            className="text-[#222] dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        >
                            <FaEnvelope />
                        </a>

                        {/* ✅ Button in Same Line */}
                        <a
                            href="/SHIVANGI_GOUTAM.pdf"
                            download
                            className="text-sm sm:text-base px-4 py-2 font-medium border transition-all duration-300 
  flex items-center gap-2 ms-auto
  text-black border-black hover:bg-black hover:text-white
  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"

                        >
                            <DownloadIcon className="text-base" />
                            Download CV
                        </a>

                    </div>




                </motion.div>
            </div>

        </div>
    );
};

export default AboutContent;
