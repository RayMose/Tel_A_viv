import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Mock project data
const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management app that uses AI to categorize and prioritize tasks",
    tech: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
    image: "/src/assets/images/projects/task.png",
    github: "#",
    live: "#"
  },
  {
    title: "Real-time Chat Application",
    description: "End-to-end encrypted chat app with real-time messaging and file sharing",
    tech: ["React", "Firebase", "WebRTC", "Styled Components"],
    image: "/src/assets/images/projects/chat.png",
    github: "#",
    live: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Administrative dashboard for managing products, orders, and analytics",
    tech: ["React", "Redux", "Material-UI", "Chart.js"],
    image: "/src/assets/images/projects/ecommerce.png",
    github: "#",
    live: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with 7-day forecast and location-based services",
    tech: ["React", "Weather API", "Geolocation", "TailwindCSS"],
    image: "/src/assets/images/projects/3.png",
    github: "#",
    live: "#"
  },
  {
    title: "Social Media Analytics Tool",
    description: "Dashboard for tracking and analyzing social media metrics",
    tech: ["React", "D3.js", "Social APIs", "Typescript"],
    image: "/src/assets/images/projects/social.png",
    github: "#",
    live: "#"
  },
  {
    title: "Fitness Tracking Platform",
    description: "Full-stack fitness app with workout planning and progress tracking",
    tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    image: "/src/assets/images/projects/fitness.jpg",
    github: "#",
    live: "#"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Martin Shweppess",
    role: "Senior Developer at TechCorp",
    content: "One of the most dedicated and skilled developers I've worked with. Their attention to detail is outstanding.",
    image: "/src/assets/images/testimonials/men2.jpg"
  },
  {
    name: "Mike Muller",
    role: "Project Manager at StartupX",
    content: "Delivered complex features ahead of schedule while maintaining excellent code quality.",
    image: "/src/assets/images/testimonials/men1.jpg"
  },
  {
    name: "Emma Williams",
    role: "CTO at InnovateHub",
    content: "A true problem-solver who brings both technical expertise and creative solutions to the table.",
    image: "/src/assets/images/testimonials/lady.jpg"
  }
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-opacity-90 backdrop-blur-sm z-50 
        shadow-lg dark:shadow-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">soYa.dev</h1>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 
                transition-colors duration-200">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-6 
          transform transition-all duration-1000 
          ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Hello, I'm <span className="text-blue-500">soYa</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A passionate React developer crafting beautiful and performant web experiences
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-white rounded-full 
                hover:bg-blue-600 transition-colors duration-200"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-blue-500 rounded-full
                hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects"
        ref={projectsRef}
        className="py-20 px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, page * 3).map((project, index) => (
            <div 
              key={project.title}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                shadow-lg hover:shadow-2xl transform hover:-translate-y-2 
                transition-all duration-300 
                ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                      hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                      hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > page * 3 && (
          <div 
            ref={loader}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setPage(p => p + 1)}
              className="px-6 py-3 bg-blue-500 text-white rounded-full
                hover:bg-blue-600 transition-colors duration-200"
            >
              Load More Projects
            </button>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work. If you have a project 
            that you want to get started, think you need my help with something 
            or just fancy saying hey, then get in touch.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:soYa@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 
                text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://linkedin.com"
              className="flex items-center gap-2 px-6 py-3 border-2 
                border-blue-500 rounded-full hover:bg-blue-500 
                hover:text-white transition-all duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between 
          items-center gap-4">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 soYa.dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://github.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 
                dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 
                dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:soYa@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 
                dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;