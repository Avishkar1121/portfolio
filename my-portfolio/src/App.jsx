import profilePic from "./assets/me.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <ul className="flex justify-center space-x-8 py-4">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
{/* Home + About Section */}
<section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-center relative overflow-hidden py-16 px-8"
>
  {/* Hero */}
  <motion.h1
    className="text-5xl md:text-6xl font-bold mb-2 text-white py-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Hi, I’m <span className="text-orange-400">Avishkar Ghosalkar</span>
  </motion.h1>

  <motion.p
    className="text-2xl md:text-2xl mb-8 text-gray-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    Aspiring Data Scientist & AI Developer
  </motion.p>

  <motion.a
    href="#projects"
    className="px-8 py-4 bg-orange-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    View My Work
  </motion.a>

  {/* About inside Home */}
  <motion.div
    className="mt-16 flex flex-col md:flex-row items-center justify-center bg-gray-800 bg-opacity-90 rounded-3xl p-12 w-full max-w-7xl shadow-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
  >
    <motion.img
      src={profilePic}
      alt="Avishkar"
      className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-2xl mb-8 md:mb-0 md:mr-16"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />

    <div className="text-center md:text-left text-gray-200 max-w-xl md:max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">About Me</h2>
      <p className="text-lg md:text-xl mb-12">
        I am a recent graduate in <span className="font-semibold">Electronics and Telecommunication Engineering</span> with a strong interest in <span className="font-semibold">Data Science</span> and <span className="font-semibold">AI Development</span>.  
        I love solving real-world problems using innovative technology and have hands-on experience with Python, Machine Learning, and Deep Learning projects.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <span className="px-5 py-3 bg-blue-100 text-blue-700 rounded-full text-base md:text-sm font-medium">Python</span>
        <span className="px-5 py-3 bg-green-100 text-green-700 rounded-full text-base md:text-sm font-medium">TensorFlow</span>
        <span className="px-5 py-3 bg-yellow-100 text-yellow-700 rounded-full text-base md:text-sm font-medium">Machine Learning</span>
        <span className="px-5 py-3 bg-purple-100 text-purple-700 rounded-full text-base md:text-sm font-medium">Data Analysis</span>
        <span className="px-5 py-3 bg-red-100 text-red-700 rounded-full text-base md:text-sm font-medium">React</span>
      </div>
    </div>
  </motion.div>
</section>
{/* Education Section */}
<section
  id="education"
  className="bg-gray-800 py-16 px-6 flex flex-col items-center"
>
  <motion.h2
    className="text-4xl font-bold mb-12 text-orange-400"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Education
  </motion.h2>

  <motion.div
    className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full md:w-3/4 max-w-4xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    <div className="space-y-4 text-green-400">
      <div>
        <h3 className="text-xl font-semibold">Bachelor of Engineering - EXTC</h3>
        <p className="text-blue-400">Vidyalankar Institue of Technology (Mumbai University) - (2021-2025)</p>
        <p className="text-gray-300 mt-2">
  Completed a Bachelor's degree in Electronics and Telecommunication Engineering, 
  developing core technical knowledge while pursuing interests in Data Science and AI.
</p>

      </div>
      <div>
        <h3 className="text-xl font-semibold">Honours And Minors - AI & ML</h3>
        <p className="text-blue-400"> Vidyalankar Institue of Technology (Mumbai University) -(2023-2025)</p>
        <p className="text-gray-300 mt-2">
      Completed Honours and Minors in Artificial Intelligence & Machine Learning, gaining hands-on experience in advanced AI concepts, algorithms, and real-world applications
      </p>
      </div>
     
    </div>
  </motion.div>
</section>



      {/* Projects Section */}
      <section id="projects" className=" bg-gray-900 py-12 px-6 md:px-20 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
          Projects
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
  <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col justify-between w-72 min-h-80">
    <h3 className="text-xl font-semibold text-green-400">Movie Recommendation System</h3>
    <p className="text-gray-200 text-sm">
      Movie Recommendation System” project:

Built a movie recommendation system using Python, Flask, and the TMDb API. The frontend shows movie suggestions dynamically with React, making it easier for users to discover new films based on their interests.
    </p>
    <a
      href="https://github.com/Avishkar1121/movie-recommender"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline text-sm"
    >
      View Project →
    </a>
  </div>

  <div className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col justify-between w-72 min-h-80">
    <h3 className="text-xl font-semibold text-green-400">Stock Market Analysis</h3>
    <p className="text-gray-200 text-sm">
      nalyzed stock price data and trends using Python, exploring patterns and insights to better understand market movements. Applied data analysis techniques to make sense of real-world financial data.
    </p>
    <a
      href="https://github.com/Avishkar1121/stock-analysis"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline text-sm"
    >
      View Project →
    </a>
  </div>
</div>

      </section>

 {/* Contact Section */}
<section
  id="contact"
  className=" flex flex-col items-center justify-center bg-gray-800 px-6 md:px-20 py-16"
>
  <h2 className="text-3xl font-semibold mb-8 text-orange-400">Contact Me</h2>

  <div className="flex flex-col md:flex-row gap-12">
    <div className="flex flex-col gap-6 text-gray-300 text-base">
      
      {/* Email */}

<p>
  <span className="material-symbols-outlined text-red-500 align-middle mr-2">
    mail
  </span>
  Email:{" "}
  <a
    href="mailto:avishkarghosalkar4956@gmail.com"
    className="text-blue-400 hover:underline"
  >
    avishkarghosalkar4956@gmail.com
  </a>
</p>


<p className="flex items-center gap-2">
  <FaPhone className="text-green-600 text-xl" />
  <a href="tel:+918180033311" className="hover:underline">
    +91 81800 33311
  </a>
</p>

<p className="flex items-center gap-2">
  <FaLinkedin className="text-[#0077B5] text-xl" />
  <a
    href="https://www.linkedin.com/in/avishkar-ghosalkar-b02b2926b"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    linkedin.com/in/avishkar-ghosalkar-b02b2926b
  </a>
</p>

<p className="flex items-center gap-2">
  <FaGithub className="text-black text-xl" />
  <a
    href="https://github.com/Avishkar1121"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    github.com/Avishkar1121
  </a>
</p>

    </div>
  </div>
</section>

    </div>
  );
}

export default App;
