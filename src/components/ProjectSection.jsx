import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#EDEDED] to-[#F8F8F8] dark:from-[#111111] dark:to-[#1a1a1a] text-[#222] dark:text-white min-h-screen w-full px-4 py-16 font-inter transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-16"
      >
        <p className="text-sm text-[#7B7B7B] dark:text-gray-400 tracking-widest">
          Things I’ve Built
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium text-[#222222] dark:text-white">
          My Projects
        </h1>
        <div className="mt-2 h-[3px] w-12 bg-[#7B7B7B] mx-auto rounded-full" />
      </motion.div>

      {/* Vertical scroll container */}
      <div className="max-w-xl mx-auto h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#B6B09F]/70 scrollbar-track-transparent">
        <div className="flex flex-col gap-6">
          {ProjectCardData.map((val, index) => (
            <div key={index} className="flex justify-center">
              <ProjectCard
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                live={val.live}
                github={val.github}
                tags={val.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
