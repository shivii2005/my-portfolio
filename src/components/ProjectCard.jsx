import React from "react";
import { NavLink } from "react-router-dom";

// ✅ React Icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFramer } from "react-icons/si";

// ✅ Map tag names to icons
const tagIcons = {
  React: <FaReact className="text-[#61DBFB]" />,
  Node: <FaNodeJs className="text-[#68A063]" />,
  HTML: <FaHtml5 className="text-[#e34c26]" />,
  CSS: <FaCss3Alt className="text-[#264de4]" />,
  JavaScript: <FaJs className="text-[#f7df1e]" />,
  GitHub: <FaGithub />,
  Tailwind: <SiTailwindcss className="text-[#38bdf8]" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  "Framer Motion": <SiFramer className="text-[#e3e3e3]" />
};

const ProjectCard = ({ imgsrc, title, text, live, github, tags = [] }) => {
  return (
    <div className="group w-[340px] h-[380px] [perspective:1000px]">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT SIDE */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-md border border-[#B6B09F] bg-white dark:bg-[#1a1a1a] [backface-visibility:hidden]">
          <img
            src={imgsrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Project title overlay */}
          {/* <div className="absolute bottom-0 w-full bg-black/60 dark:bg-white/80 text-white dark:text-black py-2 px-4 text-center font-semibold text-sm">
            {title}
          </div> */}
        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full rounded-xl bg-[#1a1a1a] dark:bg-[#111] border border-[#B6B09F] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#B6B09F] mb-2 text-center">{title}</h2>
            <p className="text-sm text-center text-gray-300 mb-3">{text}</p>

            {/* Icons Instead of Tags */}
            <div className="mb-4">
              <p className="text-sm text-center mb-2 text-[#B6B09F] font-medium">
                Tech Used:
              </p>
              <div className="flex justify-center flex-wrap gap-3 text-2xl">
                {tags.map((tag, index) => (
                  <div key={index} title={tag}>
                    {tagIcons[tag] || <span className="text-xs">{tag}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            <NavLink
              to={live}
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium border border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-inherit dark:hover:text-inherit transition-all duration-300 shadow-md"
            >
              Live
            </NavLink>
            <NavLink
              to={github}
              target="_blank"
              rel="noreferrer"
              className="text-sm sm:text-base bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium border border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-inherit dark:hover:text-inherit transition-all duration-300 shadow-md"
            >
              GitHub
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
