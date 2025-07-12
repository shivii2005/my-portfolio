import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const handleClick = () => setClick(!click);

  const changeNavBg = () => {
    setScrolled(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div
      className={`fixed top-0 w-full z-50 h-[80px] transition-all duration-500 font-inter ${scrolled
        ? "bg-[#F8F8F8] dark:bg-[#111111] shadow-md opacity-[90%]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center px-6 md:px-10">
        {/* Logo */}

        <div className="flex items-center gap-2 text-[#222222] dark:text-white text-2xl font-medium tracking-wide">
          {/* Icon: always visible, centered text inside */}
          <div className="w-12 h-12 bg-[#585757] rounded-2xl text-white flex items-center justify-center dark:bg-white dark:text-black">
            S
          </div>

          {/* Text: hidden on small screens (shown on md and up) */}
          <span className="hidden sm:inline">Shivangi</span>
        </div>



        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 lg:gap-12 items-center">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-link"
                className="cursor-pointer text-[#222222] dark:text-white text-lg font-medium transition relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-[#222222] dark:bg-white"></span>
              </ScrollLink>
            </li>
          ))}

          {/* Theme Toggle - Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 w-10 h-10 flex items-center justify-center 
             rounded-full transition-all duration-300 
             bg-[#585757] dark:bg-[#fff] 
             text-[#fff] dark:text-[#000] 
             hover:scale-110 shadow-md"
            title="Toggle Theme"
          >
            {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
          </button>

        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden z-[100] cursor-pointer" onClick={handleClick}>
          {click ? (
            <FaTimes size={24} className="text-[#222222] dark:text-white " />
          ) : (
            <FaBars size={24} className="text-[#222222] dark:text-white" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#F8F8F8] dark:bg-[#111111] flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-500 z-40 ${click ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {navItems.map((item, idx) => (
          <li key={idx}>
            <ScrollLink
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleClick}
              activeClass="active-link"
              className="cursor-pointer text-[#222222] dark:text-white hover:text-[#7B7B7B] dark:hover:text-gray-400 transition-colors"
            >
              {item}
            </ScrollLink>
          </li>
        ))}

        {/* Theme Toggle in mobile */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            setClick(false);
          }}
          className="w-10 h-10 flex items-center justify-center 
             rounded-full transition-all duration-300 
             bg-[#e5e5e5] dark:bg-[#444] 
             text-black dark:text-white 
             hover:scale-110 shadow-md"
        >
          {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
        </button>



      </ul>
    </div>
  );
};

export default Navbar;
