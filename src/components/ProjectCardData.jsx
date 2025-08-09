import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import chat3 from "../assets/chat3.png";
import chat4 from "../assets/chat4.png";
import chat5 from "../assets/chat5.png";
import proj1 from "../assets/profile2.jpg";
import proj2 from "../assets/profile2.jpg";
import salon1 from "../assets/salon1.png";
import salon2 from "../assets/salon2.png";
import salon3 from "../assets/salon3.png";
import leet1 from "../assets/leet1.png";
import leet2 from "../assets/leet2.png";
import leet3 from "../assets/leet3.png";


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
    imgsrc: [leet1, leet2, leet3],
    title: "LeetMetric",
    subtitle: "MERN Stack Blogging Platform",
    description: "LeetMetric is a simple and interactive web application that lets users track their LeetCode progress in real-time By entering a LeetCode username, it fetches the number of solved problems, displays progress in colorful circular charts, and shows detailed submission stats for each difficulty level.",
    features: [
      "Search by LeetCode username",
      "Display solved problem counts for Easy, Medium, and Hard levels",
      "Circular progress charts with percentage completion",
      "Detailed statistics cards for each difficulty"
    ],
    // live: "https://example.com/",
    github: "https://github.com/shivii2005/leetmetric",
    tags: [ "Git", "GitHub", "Node.js", "Express", " LeetCode GraphQL API"]
  },
  {
    imgsrc: [salon1, salon2, salon3],
    title: "Salon App",
    subtitle: "Alternate Personal Portfolio",
    description: "A modern web application that allows customers to browse salon services, select available time slots, and book appointments online. The system provides a smooth and responsive user interface for clients and an easy-to-manage appointment system for salon administrators.",
    features: [
      "Minimalist design",
      "Dark/light theme support",
      "Showcase of resume and GitHub",
      "Smooth scrolling navigation"
    ],
    // live: "https://portfolio.com/",
    github: "https://github.com/shivii2005/salon-app",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  // {
  //   imgsrc: [proj1, proj2],
  //   title: "Blog Platform",
  //   subtitle: "Full-stack Blog Website",
  //   description: "A scalable blog site built with MERN stack, providing interactive UI and backend integration.",
  //   features: [
  //     "Responsive design",

  //     "Visually appealing UI with Bootstrap/Reactstrap",

  //     "Reliable form validation",

  //     "Realistic form data collection experience"


  //   ],
  //   //  live: "https://your-blog.com",
  //   github: "https://github.com/your-blog",
  //   tags: ["React", "Bootstrap & Reactstrap", "JavaScript"]
  // }
];

export default ProjectCardData;
