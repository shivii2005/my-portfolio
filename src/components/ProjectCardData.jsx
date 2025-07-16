import proj1 from "../assets/profile2.jpg";
import proj2 from "../assets/profile2.jpg";
import proj3 from "../assets/profile2.jpg";

const ProjectCardData = [
  {
    imgsrc: proj1,
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description: "A modern portfolio using React, showcasing skills, projects, and contact information with animations.",
    features: [
      "Animated transitions using Framer Motion",
      "Responsive and mobile-friendly",
      "Contact form with EmailJS integration",
      "Project showcase with tech stack tags"
    ],
    live: "https://myportfolio.com",
    github: "https://github.com/myportfolio",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    imgsrc: proj2,
    title: "Blog App",
    subtitle: "MERN Stack Blogging Platform",
    description: "A full-stack blog application where users can create, edit, and delete posts with authentication.",
    features: [
      "User authentication and authorization",
      "Rich text editor for blog posts",
      "MongoDB-powered database",
      "Modern UI using Tailwind CSS"
    ],
    live: "https://example.com/",
    github: "https://github.com/myportfolio/blog-app",
    tags: ["React", "Tailwind", "Framer Motion", "Node", "MongoDB"]
  },
  {
    imgsrc: proj3,
    title: "Second Portfolio Site",
    subtitle: "Alternate Personal Portfolio",
    description: "An alternate design of the personal portfolio built using React and Tailwind CSS.",
    features: [
      "Minimalist design",
      "Dark/light theme support",
      "Showcase of resume and GitHub",
      "Smooth scrolling navigation"
    ],
    live: "https://portfolio.com/",
    github: "https://github.com/myportfolio/second-portfolio",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    imgsrc: proj3,
    title: "Blog Platform",
    subtitle: "Full-stack Blog Website",
    description: "A scalable blog site built with MERN stack, providing interactive UI and backend integration.",
    features: [
      "Create, read, update, delete blog posts",
      "Real-time database updates",
      "JWT-based authentication",
      "RESTful APIs using Express.js"
    ],
    live: "https://your-blog.com",
    github: "https://github.com/your-blog",
    tags: ["React", "Node", "MongoDB"]
  }
];

export default ProjectCardData;
