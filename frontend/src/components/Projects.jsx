import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Turf Slot Booking System',
      description: 'A comprehensive web application that allows users to book sports turf slots online efficiently. Features include real-time slot availability management and an intuitive booking system.',
      tags: ['React', 'Spring Boot', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Medical AI Application',
      description: 'An intelligent healthcare-related application designed to help analyze medical data and assist users with relevant insights. Built with modern UI and responsive design principles.',
      tags: ['React', 'Python', 'AI'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass hover-lift delay-100">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
