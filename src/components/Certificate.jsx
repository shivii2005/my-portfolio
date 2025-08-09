import React, { useEffect, useRef } from "react";
import CertificateCard from "./CertificateCard";
import CertificateCardData from "./CertificateCardData";
import { motion } from "framer-motion";

const Certificate = () => {
  const scrollRef = useRef();
  const scrollSpeed = 1.5;
  const scrollGap = 24; // Tailwind gap-6 ~24px
  const cardWidth = 480 + scrollGap; // match CertificateCard width

  const extendedCertificateData = [...CertificateCardData, ...CertificateCardData];

  useEffect(() => {
    const container = scrollRef.current;
    let currentScroll = 0;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;
      currentScroll += scrollSpeed;

      const maxScroll = cardWidth * CertificateCardData.length;

      if (currentScroll >= maxScroll) {
        container.scrollLeft = 0;
        currentScroll = 0;
      }
    };
    const interval = setInterval(scroll, 16); // smooth scroll
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#F8F8F8] to-[#EDEDED] dark:from-[#111111] dark:to-[#1a1a1a] text-[#222] dark:text-white px-4 py-16 min-h-screen font-inter transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-16"
      >
        <p className="text-sm text-[#7B7B7B] dark:text-gray-400 tracking-widest">
          My Achievements
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium text-[#222222] dark:text-white">
          Certificates
        </h1>
        <div className="mt-2 h-[3px] w-12 bg-[#7B7B7B] mx-auto rounded-full" />
      </motion.div>

      {/* Auto-scrolling horizontally */}
      <div ref={scrollRef} className="max-w-7xl mt-[10%] mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-fit">
          {extendedCertificateData.map((cert, index) => (
            <CertificateCard
              key={index}
              imgsrc={cert.imgsrc}
              title={cert.title}
              viewLink={cert.viewLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
