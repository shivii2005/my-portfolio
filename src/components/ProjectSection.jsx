import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const scrollRef = useRef();
  const scrollSpeed = 1;
  const scrollGap = 12; // Tailwind gap-3 approx in px
  const cardWidth = 340 + scrollGap; // match ProjectCard width

  // Duplicate data to simulate infinite loop
  const extendedProjectData = [...ProjectCardData, ...ProjectCardData];

  useEffect(() => {
    const container = scrollRef.current;
    let currentScroll = 0;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;
      currentScroll += scrollSpeed;

      const maxScroll = (cardWidth + scrollGap) * ProjectCardData.length;

      // Reset to beginning when first copy ends
      if (currentScroll >= maxScroll) {
        container.scrollLeft = 0;
        currentScroll = 0;
      }
    };

    const interval = setInterval(scroll, 20); // smoother
    return () => clearInterval(interval);
  }, []);

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
      </motion.div>

      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-6 w-fit">
          {extendedProjectData.map((val, index) => (
            <div key={index} className="flex-shrink-0">
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
