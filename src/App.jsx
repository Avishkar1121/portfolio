import profilePic from "./assets/me.jpg";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <ul className="flex justify-center space-x-8 py-4">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-yellow-300">Avishkar</span>
        </motion.h1>

        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring Data Scientist & AI Developer
        </motion.p>

        <motion.a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6"
      >
        {/* Image */}
        <motion.img
          src={profilePic}
          alt="Avishkar"
          className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            I am a recent graduate in <span className="font-semibold">Electronics and Telecommunication Engineering</span> with a strong interest in <span className="font-semibold">Data Science</span> and <span className="font-semibold">AI Development</span>.  
            I love solving real-world problems through innovative technology and have hands-on experience with Python, Machine Learning, and Deep Learning projects.
          </motion.p>

          {/* Skills List */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">TensorFlow</span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Machine Learning</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Data Analysis</span>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">React</span>
          </motion.div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-200 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 - Stock Market Analysis */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition h-full"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-600">
              Stock Market Analysis
            </h3>
            <p className="text-gray-600 mb-6">
              Analyzed stock trends using Python, Pandas, and Matplotlib to identify
              patterns and insights.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Avishkar1121/stock_analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                GitHub
              </a>
             
              
            </div>
          </motion.div>

          {/* Project Card 2 - Movie Recommendation System */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition h-full"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              Movie Recommendation System
            </h3>
            <p className="text-gray-600 mb-6">
              Built a movie recommendation system using Python and Flask. The backend fetches movie details and similar movie suggestions from the TMDb API, and the frontend displays recommendations based on user input. Users can search for a movie and instantly see the original movie along with related suggestions, complete with posters, genres, and overviews.
              Technologies: Python, Flask, Requests, React, JavaScript, TMDb API, JSON
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Avishkar1121/movie_recommendation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                GitHub
              </a>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-300 px-6"
      >
        <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-gray-800">
            <p className="text-lg">
              <span role="img" aria-label="email">📧</span> Email:{" "}
              <a href="mailto:avishkarghosalkar4956@gmail.com" className="text-blue-600 hover:underline">
                avishkarghosalkar4956@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <span role="img" aria-label="phone">📞</span> Phone:{" "}
              <a href="tel:+918180033311" className="text-blue-600 hover:underline">
                +91 81800 33311
              </a>
            </p>
            <p className="text-lg">
              <span role="img" aria-label="linkedin">💼</span> LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/avishkar-ghosalkar-b02b2926b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/avishkar-ghosalkar-b02b2926b
              </a>
            </p>
            <p className="text-lg">
              <span role="img" aria-label="github">🐙</span> GitHub:{" "}
              <a
                href="https://github.com/Avishkar1121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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

