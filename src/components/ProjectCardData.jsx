import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import chat3 from "../assets/chat3.png";
import chat4 from "../assets/chat4.png";
import chat5 from "../assets/chat5.png";
import proj1 from "../assets/profile2.jpg";
import proj2 from "../assets/profile2.jpg";

const ProjectCardData = [
  {
    imgsrc: [chat1, chat2, chat3, chat4, chat5],
    title: "Chat App",
    subtitle: "Personal Developer Portfolio",
    description: "A modern real-time chat application built with React and Supabase, supporting authentication, live chat, and profile management with smooth UX transitions.",
    features: [
      "User authentication with Supabase (Sign Up / Login)",
      "Conditional redirect to profile setup after first login",
      "Real-time chat using Supabase Database",
      "Profile update with avatar upload (Supabase Storage)",
      "Logout functionality with session handling",

    ],
    //live: "https://myportfolio.com",
    github: "https://github.com/shivii2005/chat-app",
    tags: ["Vite", "Tailwind", "Framer Motion"]
  },
  {
    imgsrc: [proj1, proj2],
    title: "Paste App",
    subtitle: "MERN Stack Blogging Platform",
    description: "A modern paste manager built with React, Redux Toolkit, Tailwind CSS, and localStorage. Features create, update, delete, search, copy, and share pastes with toast notifications and minimal UI.",
    features: [
      "Create, update, and delete pastes",
      "Search and copy pastes",
      "Toast notifications",
      "Data saved with localStorage"
    ],
    // live: "https://example.com/",
    github: "https://github.com/shivii2005/paste-app",
    tags: ["Vite", "Tailwind", "Redux Toolkit", "React Router", "Framer Motion"]
  },
  {
    imgsrc: [proj1, proj2],
    title: "Second Portfolio Site",
    subtitle: "Alternate Personal Portfolio",
    description: "An alternate design of the personal portfolio built using React and Tailwind CSS.",
    features: [
      "Minimalist design",
      "Dark/light theme support",
      "Showcase of resume and GitHub",
      "Smooth scrolling navigation"
    ],
    // live: "https://portfolio.com/",
    github: "https://github.com/myportfolio/second-portfolio",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    imgsrc: [proj1, proj2],
    title: "Blog Platform",
    subtitle: "Full-stack Blog Website",
    description: "A scalable blog site built with MERN stack, providing interactive UI and backend integration.",
    features: [
      "Create, read, update, delete blog posts",
      "Real-time database updates",
      "JWT-based authentication",
      "RESTful APIs using Express.js"
    ],
    //  live: "https://your-blog.com",
    github: "https://github.com/your-blog",
    tags: ["React", "Node", "MongoDB"]
  }
];

export default ProjectCardData;
