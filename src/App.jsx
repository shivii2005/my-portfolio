import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutContent from "./components/AboutContent";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Certificate from "./components/Certificate";
import { Element } from "react-scroll";
import "swiper/css";
import Loader from "./components/Loader"; // ✅ Import your Lottie loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load delay (or replace with actual async logic)
    const timer = setTimeout(() => setLoading(false), 2000);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (loading) return <Loader />; // ✅ Show loader while loading is true

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />

      <Element name="home">
        <section id="home"><HomeSection /></section>
      </Element>

      <Element name="about">
        <section id="about"><AboutContent /></section>
      </Element>

      <Element name="skills">
        <section id="skills"><Skills /></section>
      </Element>

      <Element name="certificate">
        <section id="certificate"><Certificate /></section>
      </Element>

      <Element name="projects">
        <section id="projects"><ProjectSection /></section>
      </Element>

      <Element name="contact">
        <section id="contact"><ContactSection /></section>
      </Element>
    </div>
  );
}

export default App;
