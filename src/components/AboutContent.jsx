import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutImage from "../assets/profile.jpg";
import { DownloadIcon } from "lucide-react";

const AboutContent = () => {
    const [expanded, setExpanded] = useState(false);

    const shortDesc =
        "I am a pre-final year Computer Science Engineering student passionate about building meaningful and user-centric digital experiences. With a strong foundation in Data Structures, Algorithms, and core programming principles, I enjoy solving complex problems and developing efficient web applications.....";

    const fullDesc = `I am a pre-final year Computer Science Engineering student passionate about building meaningful and user-centric digital experiences. With a strong foundation in Data Structures, Algorithms, and core programming principles, I enjoy solving complex problems and developing efficient web applications.

My interests lie at the intersection of design and development, where I channel creativity into intuitive UI/UX and robust front-end solutions. I have worked on several projects using modern technologies like React, Tailwind CSS, and Supabase, and I’m always exploring new tools to enhance both performance and design.

Outside the classroom, I am an active Sports Committee Member, which has helped me develop leadership, teamwork, and organizational skills.

I’m currently seeking opportunities that allow me to grow as a developer, contribute to impactful projects, and collaborate with innovative teams.`;

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
                {/* Left Column - Image */}
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

                {/* Right Column - Cards + Description */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex flex-col gap-8"
                >
                    {/* Cards Section */}
                    <div className="flex flex-wrap gap-6">
                        {/* Location Card */}
                        <div className="flex-1 min-w-[240px] border border-[#B6B09F] rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <FaBriefcase className="text-xl text-[#000] dark:text-[#fff]" />
                                <h3 className="font-semibold text-lg">Location</h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#444] dark:text-gray-300">
                                <span>Dehri-On-Sone, Rohtas, Bihar</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#444] dark:text-gray-300 mt-2">
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

                    {/* Description Section with Read More / Show Less */}
                    <div className="font-inter text-base sm:text-lg text-[#555] dark:text-gray-300 whitespace-pre-line">
                        {expanded ? fullDesc : shortDesc}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {expanded ? "Show less" : "Read more"}
                        </button>
                    </div>

                    {/* Social Icons + Download Button */}
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

                        <a
                            href="/SHIVANGI_GOUTAM.pdf"
                            download
                            className="text-sm sm:text-base px-4 py-2 font-medium border transition-all duration-300 flex items-center gap-2 ms-auto text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
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
