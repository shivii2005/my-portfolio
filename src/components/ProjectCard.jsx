import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFramer,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
// Icon map
const tagIcons = {
  React: <FaReact className="text-[#61DBFB]" />,
  Node: <FaNodeJs className="text-[#68A063]" />,
  HTML: <FaHtml5 className="text-[#e34c26]" />,
  CSS: <FaCss3Alt className="text-[#264de4]" />,
  JavaScript: <FaJs className="text-[#f7df1e]" />,
  GitHub: <FaGithub />,
  Tailwind: <SiTailwindcss className="text-[#38bdf8]" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  "Framer Motion": <SiFramer className="text-[#e3e3e3]" />,
};

const ProjectCard = ({ imgsrc, title, description, features = [], live, github, tags = [] }) => {
  return (
    <div className="w-[90%] md:h-[380px] mx-auto border border-[#B6B09F] rounded-xl overflow-hidden shadow-md bg-white dark:bg-[#1a1a1a] flex flex-col-reverse md:flex-row justify-evenly items-center transition-all duration-500">



      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between text-[#222] dark:text-white">
        <div>
          <h2 className="text-2xl font-semibold text-[#B6B09F] mb-2 text-center md:text-left">{title}</h2>

          <p className="text-sm text-center md:text-left text-gray-700 dark:text-gray-300 mb-4">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="list-disc text-sm pl-5 mb-4 text-gray-700 dark:text-gray-300">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}

          <div className="mb-4">
            <p className="text-sm text-center md:text-left mb-2 text-[#000] font-medium dark:text-[#B6B09F]">
              Tech Used:
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm sm:text-base">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#EDEDED] dark:bg-[#1a1a1a] text-[#333] dark:text-white border border-[#B6B09F] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          {/* <NavLink
            to={live}
            target="_blank"
            rel="noreferrer"
            className="text-sm sm:text-base bg-transparent text-black dark:bg-transparent dark:text-white px-4 py-2 rounded-lg font-medium border border-black dark:border-white hover:bg-black dark:hover:bg-transparent hover:text-white dark:hover:text-black dark:hover:bg-white transition-all duration-300 shadow-md"
          >
            Live
          </NavLink> */}
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



      {/* RIGHT SECTION - Image */}

      <div className="w-full md:w-[35%] md:h-full flex items-center justify-center">
        <div className="h-[200px] md:h-[80%] w-[90%] flex items-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="w-full h-full rounded-md"
          >
            {imgsrc.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
