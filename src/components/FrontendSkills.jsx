"use client";
import React, { useEffect, useState } from "react";
import { FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer, SiVite,
} from "react-icons/si";

export const FrontendSkills = () => {
  const [radius, setRadius] = useState(140);
  const [size, setSize] = useState(70);
  const [containerSize, setContainerSize] = useState("w-[340px] h-[340px]");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setRadius(90);
        setSize(50);
        setContainerSize("w-[240px] h-[240px]");
      } else if (width < 640) {
        setRadius(110);
        setSize(60);
        setContainerSize("w-[280px] h-[280px]");
      } else if (width < 768) {
        setRadius(120);
        setSize(65);
        setContainerSize("w-[300px] h-[300px]");
      } else {
        setRadius(140);
        setSize(70);
        setContainerSize("w-[340px] h-[340px]");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    { Icon: FaJs, className: "bg-[#F7DF1E] text-black" },
    { Icon: SiTypescript, className: "bg-[#3178C6] text-white" },
    { Icon: FaReact, className: "bg-[#61DAFB] text-black" },
    { Icon: SiNextdotjs, className: "bg-[#333333] text-white" },
    { Icon: SiTailwindcss, className: "bg-[#06B6D4] text-white" },
    { Icon: SiRedux, className: "bg-[#764ABC] text-white" },
    { Icon: SiFramer, className: "bg-[#EC5990] text-white" },
    { Icon: SiVite, className: "bg-[#646CFF] text-white" },
  ];

  return (
    <div className={`relative ${containerSize}`}>
      <div className="absolute inset-0 animate-spin-slow-reverse">
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;
          const x = radius * Math.cos(toRadians(angle));
          const y = radius * Math.sin(toRadians(angle));

          return (
            <div
              key={index}
              style={{
                top: `calc(50% - ${size / 2}px + ${y}px)`,
                left: `calc(50% - ${size / 2}px + ${x}px)`,
                width: size,
                height: size,
              }}
              className={`absolute rounded-full shadow-md flex items-center justify-center ${logo.className}`}
            >
              <logo.Icon className="w-6 h-6" />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 rounded-full shadow-inner flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold text-foreground">
          FRONTEND
        </div>
      </div>
    </div>
  );
};
