import React from 'react';
import { PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import type { Project } from '../types';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Projects: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          My Work
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-12 rounded"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project: Project, index: number) => (
            <div key={index} className="group relative flex flex-col bg-dark-slate rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-neon-blue/20 transform hover:-translate-y-2">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-dark-navy/50"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neon-blue mb-2">{project.title}</h3>
                <p className="text-slate text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-dark-navy text-neon-blue text-xs font-semibold px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-auto">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-colors duration-300">
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-colors duration-300">
                      <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                  )}
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