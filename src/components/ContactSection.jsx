import React, { useRef } from "react";
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e45hbbq",
        "template_u9h6f8i",
        form.current,
        "6Maew-xFO9FC7mT8O"
      )
      .then(
        (result) => {
          alert("Thank you! You’ve joined the waitlist.");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong.");
        }
      );
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
        </h1>
      </div>

      {/* Waitlist Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row items-center w-full max-w-md gap-3 p-1 mb-12 rounded-full shadow-md bg-[#e0e0e0] dark:bg-[#1a1a1a]"
      >
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none  "
        />
        <button
          type="submit"
          className="px-5 py-2 font-semibold text-white bg-[#222] dark:bg-white dark:text-black rounded-full transition-all hover:scale-105"
        >
          Join Waitlist
        </button>
      </form>

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
          <LinkBox Icon={FaWhatsapp} href="https://wa.me/919999999999" />
          <LinkBox Icon={FaInstagram} href="https://instagram.com" />
          <LinkBox Icon={FaSnapchatGhost} href="#" />
          <LinkBox Icon={FaTwitter} href="https://twitter.com" />
        </div>
        <div className="grid grid-cols-3 divide-x divide-[#B6B09F]">
          <LinkBox Icon={FaTelegram} href="#" />
          <LinkBox Icon={FaDiscord} href="#" />
          <LinkBox Icon={FaFacebook} href="https://facebook.com" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-sm text-[#888] dark:text-gray-500 text-center">
        &copy; 2025 Shivangi Goutam. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;
