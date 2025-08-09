"use client";
import React, { useEffect, useState } from "react";
import { FaNodeJs, FaCubes } from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiMysql, SiPrisma, SiPython,
} from "react-icons/si";

export const BackendSkills = () => {
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
        setSize(55);
        setContainerSize("w-[280px] h-[280px]");
      } else if (width < 768) {
        setRadius(120);
        setSize(60);
        setContainerSize("w-[300px] h-[300px]");
      } else {
        setRadius(140); // match frontend
        setSize(70);     // match frontend
        setContainerSize("w-[340px] h-[340px]");
      }

    };

    updateSize(); // Initial call
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toRadians = (deg) => (Math.PI / 180) * deg;

  const logos = [
    { Icon: FaNodeJs, className: "bg-[#339933] text-white" },
    { Icon: SiExpress, className: "bg-[#333333] text-white" },
    { Icon: SiMongodb, className: "bg-[#47A248] text-white" },
    { Icon: SiMysql, className: "bg-[#00758F] text-white" },
    { Icon: SiPrisma, className: "bg-[#2D3748] text-white" },
    { Icon: FaCubes, className: "bg-[#5B3DF5] text-white" },
    { Icon: SiPython, className: "bg-[#3776AB] text-white" },
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
          BACKEND
        </div>
      </div>
    </div>
  );
};
