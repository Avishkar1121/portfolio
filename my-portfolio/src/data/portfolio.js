import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const profile = {
  name: "Avishkar Ghosalkar",
  roles: [
    
    "Software Developer",
    "AI/ML Enthusiast",
    
  ],
  about:
    "I am a recent graduate in Electronics and Telecommunication Engineering with 1+year of experience in software development. I love solving real-world problems using innovative technology and have hands-on experience with Python, Machine Learning, and Deep Learning projects.",
};

export const navLinks = ["Home", "About", "Experience", "Education", "Projects", "Contact"];

export const experience = [
  {
    role: "Project Research Assistant",
    company: "IIT Bombay, Mumbai",
    period: "Oct 2025 - Present",
    points: [
      "Devloped RESTful APIs using FastAPI, implementing CRUD operations and integrating with PostgreSQL for efficient data management.",
      "Built React frontend features using Hooks for state management and API request handling, supporting scalable frontend-backend integration.",
      "Designed relational database schemas to support application workflows, focusing on table structure, relationships, and normalization in line with standard software engineering practices.",
      "Collaborated with senior developers and researchers on backend-frontend interaction, API request/response flow, and error handling, contributing to secure and reliable feature delivery.",
    ],
    tags: ["Python", "React", "REST APIs", "PostgreSQL", "SQL", "Database Design"],
  },
];

export const skills = [
  { name: "Python", color: "from-blue-400 to-cyan-400" },
  { name: "React", color: "from-orange-400 to-amber-300" },
  { name: "DBMS", color: "from-yellow-300 to-lime-400" },
  { name: "ETL Pipeline", color: "from-fuchsia-400 to-purple-500" },
  { name: "Docker", color: "from-emerald-400 to-teal-400" },
  { name: "FastAPI", color: "from-rose-400 to-red-400" },
];

export const stats = [
  { value: "2025", label: "B.E. Graduate" },
  { value: "2+", label: "Projects Built" },
  { value: "AI/ML", label: "Honours & Minors" },
];

export const education = [
  {
    title: "Bachelor of Engineering - EXTC",
    school: "Vidyalankar Institute of Technology (Mumbai University)",
    period: "2021 - 2025",
    description:
      "Completed a Bachelor's degree in Electronics and Telecommunication Engineering, developing core technical knowledge while pursuing interests in Data Science and AI.",
  },
  {
    title: "Honours and Minors - AI & ML",
    school: "Vidyalankar Institute of Technology (Mumbai University)",
    period: "2023 - 2025",
    description:
      "Completed Honours and Minors in Artificial Intelligence & Machine Learning, gaining hands-on experience in advanced AI concepts, algorithms, and real-world applications.",
  },
];

export const projects = [
  {
    title: "Movie Recommendation System",
    description:
      "Built a movie recommendation system using Python, Flask, and the TMDb API. The React frontend shows movie suggestions dynamically, making it easier for users to discover new films based on their interests.",
    tags: ["Python", "Flask", "TMDb API", "React"],
    link: "https://github.com/Avishkar1121/movie-recommender",
  },
  {
    title: "Stock Market Analysis",
    description:
      "Analyzed stock price data and trends using Python, exploring patterns and insights to better understand market movements. Applied data analysis techniques to make sense of real-world financial data.",
    tags: ["Python", "Pandas", "Data Analysis"],
    link: "https://github.com/Avishkar1121/stock-analysis",
  },
];

export const contacts = [
  {
    label: "Email",
    value: "avishkarghosalkar4956@gmail.com",
    href: "mailto:avishkarghosalkar4956@gmail.com",
    Icon: FaEnvelope,
    color: "text-red-400",
  },
  {
    label: "Phone",
    value: "+91 81800 33311",
    href: "tel:+918180033311",
    Icon: FaPhone,
    color: "text-green-400",
  },
  {
    label: "LinkedIn",
    value: "avishkar-ghosalkar-b02b2926b",
    href: "https://www.linkedin.com/in/avishkar-ghosalkar-b02b2926b",
    Icon: FaLinkedin,
    color: "text-sky-400",
    external: true,
  },
  {
    label: "GitHub",
    value: "Avishkar1121",
    href: "https://github.com/Avishkar1121",
    Icon: FaGithub,
    color: "text-white",
    external: true,
  },
];
