
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project: Project, index: number) => (
            <div 
              key={index} 
              className="group flex flex-col bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-slate-700 transition-all duration-300 transform hover:scale-[1.03] hover:border-neon-blue/50 hover:shadow-neon-blue/10"
            >
              <div className="flex-grow">
                <header className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-light-slate group-hover:text-neon-blue transition-colors duration-300 pr-4">{project.title}</h3>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-colors duration-300 flex-shrink-0" aria-label="GitHub repository">
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                </header>
                
                <p className="text-slate text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>
              
              <footer className="mt-auto pt-4 border-t border-slate-700/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-dark-navy text-neon-blue text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                  ))}
                  </div>

                  {project.liveUrl !== '#' && (
                  <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-slate-700/50 text-slate font-semibold rounded-lg hover:bg-neon-blue/10 hover:text-neon-blue border border-slate-700 hover:border-neon-blue/50 transition-all duration-300"
                  >
                      <ExternalLinkIcon className="w-5 h-5" />
                      View Live
                  </a>
                  )}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
