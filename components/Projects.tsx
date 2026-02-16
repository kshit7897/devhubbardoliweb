import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import type { Project } from '../types';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 flex flex-col rounded-2xl bg-white"
      >
        {/* Project Image Header */}
        <div
          className="w-full h-56 bg-slate-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

          {/* Floating Action Links */}
          <div
            className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
            style={{ transform: "translateZ(40px)" }}
          >
            <a
              href={project.githubUrl}
              target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-slate-700 hover:text-neon-blue transition-colors"
              title="View Code"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-slate-700 hover:text-neon-blue transition-colors"
                title="View Live Site"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full text-left relative z-10 bg-white">
          <h3
            className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-neon-blue transition-colors"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.description}
          </p>

          <div
            className="mt-auto flex flex-wrap gap-2"
            style={{ transform: "translateZ(25px)" }}
          >
            {project.techStack.map((tech, i) => (
              <span key={i} className="bg-slate-50 text-slate-600 border border-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          Our Work
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000">
          {PROJECTS.map((project: Project, index: number) => (
            <div key={index} className="w-full perspective-1000">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
