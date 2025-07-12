"use client";
import React from "react";
import { motion } from "framer-motion";
import { FrontendSkills } from "../components/FrontendSkills";
import { BackendSkills } from "../components/BackendSkills";

const Skills = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#EDEDED] to-[#F8F8F8] dark:from-[#111111] dark:to-[#1a1a1a] text-[#222222] dark:text-white min-h-screen w-full px-4 sm:px-6 py-12 font-inter transition-colors duration-500 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-16"
      >
        <p className="text-sm text-[#7B7B7B] dark:text-gray-400 tracking-widest">
          Explore my stack
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium text-[#222222] dark:text-white">
          My Skills
        </h1>
      </motion.div>

      {/* Skill Circles */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <FrontendSkills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <BackendSkills />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
