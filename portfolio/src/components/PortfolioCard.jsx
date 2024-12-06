import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, inView }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
        shadow-lg hover:shadow-2xl transform hover:-translate-y-2 
        transition-all duration-300 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
  );
};

export default ProjectCard;