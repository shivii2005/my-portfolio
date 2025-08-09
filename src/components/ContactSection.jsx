import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaFacebook,
  FaSnapchatGhost,
} from "react-icons/fa";
import { useAnimate } from "framer-motion";
import emailjs from "@emailjs/browser";
import WaitlistModal from "./WaitlistModal"; // ✅ ensure correct path


const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const sides = [
      { proximity: Math.abs(box.left - e.clientX), side: "left" },
      { proximity: Math.abs(box.right - e.clientX), side: "right" },
      { proximity: Math.abs(box.top - e.clientY), side: "top" },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
    ];
    return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 dark:text-white text-black"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-black text-white dark:bg-white dark:text-black transition-all"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e, formRef) => {
    emailjs
      .sendForm(
        "service_e45hbbq",
        "template_u9h6f8i",
        formRef.current,
        "6Maew-xFO9FC7mT8O"
      )
      .then(() => {
        alert("Thank you! You’ve joined the waitlist.");
        if (formRef.current) formRef.current.reset(); // ✅ avoid crash
      })
      .catch(() => {
        alert("Oops! Something went wrong.");
      });
  };


  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-[#F8F8F8] dark:bg-[#111111] text-[#222] dark:text-white transition-colors duration-300 scroll-mt-20"
    >
      <div className="text-center mb-8 ">
        <p className="text-sm text-[#7B7B7B] dark:text-gray-400">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl mb-10 font-semibold text-[#222] dark:text-white">
          Contact Me
          <div className="mt-2 h-[3px] w-12 bg-[#7B7B7B] mx-auto rounded-full" />
        </h1>

      </div>

      {/* Waitlist Trigger Button */}
      <div className="mb-12">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm sm:text-base bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium border border-black dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-inherit dark:hover:text-inherit transition-all duration-300 shadow-md ms-auto flex items-center gap-2"
        >
          Connect With Me
        </button>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        sendEmail={sendEmail}
      />


      {/* Social Icons Grid */}
      <div className="divide-y divide-[#B6B09F] border border-[#B6B09F] w-full max-w-5xl">
        <div className="grid grid-cols-2 divide-x divide-[#B6B09F]">
          <LinkBox Icon={FaEnvelope} href="mailto:shivangigoutam06@gmail.com" />
          <LinkBox
            Icon={FaLinkedin}
            href="https://www.linkedin.com/in/shivangi-goutam-b2b102290"
          />
        </div>
        <div className="grid grid-cols-4 divide-x divide-[#B6B09F]">
          <LinkBox Icon={FaWhatsapp} href="https://wa.me/917645078945" />
          <LinkBox Icon={FaInstagram} href="https://www.instagram.com/imshivii__?" />
          <LinkBox Icon={FaSnapchatGhost} href="https://www.snapchat.com/add/monshigoutam?" />
          <LinkBox Icon={FaTwitter} href="https://x.com/goutam_shi64721?t=CSD85Ch4ODCVLv4poBLEpQ&s=09" />
        </div>
        <div className="grid grid-cols-3 divide-x divide-[#B6B09F]">
          <LinkBox Icon={FaTelegram} href="https://t.me/shiviigii" />
          <LinkBox Icon={FaDiscord} href="#" />
          <LinkBox Icon={FaFacebook} href="https://facebook.com" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-base text-[#888] dark:text-gray-500 text-center">
        &copy; 2025 Shivangi Goutam. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;
