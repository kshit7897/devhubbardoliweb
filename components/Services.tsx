import React from 'react';
import type { Service } from '../types';
import { CodeIcon, WebIcon, DocumentIcon } from './Icons';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const servicesData: Service[] = [
  {
    icon: <WebIcon className="w-12 h-12 text-neon-blue mb-4" />,
    title: 'Websites & Landing Pages',
    price: 'Custom Pricing',
    description: 'Professional websites and landing pages to showcase your business, product, or portfolio with fast performance and responsive design.',
  },
  {
    icon: <CodeIcon className="w-12 h-12 text-neon-blue mb-4" />,
    title: 'Web Apps & Dashboards',
    price: 'Custom Pricing',
    description: 'Data-driven web applications and admin dashboards to help you manage operations, customers, and analytics.',
  },
  {
    icon: <CodeIcon className="w-12 h-12 text-neon-blue mb-4" />,
    title: 'Startup MVPs',
    price: 'Fast Turnaround',
    description: 'Minimum Viable Products for startups — validate ideas quickly with a lean, production-ready web build.',
  },
  {
    icon: <DocumentIcon className="w-12 h-12 text-neon-blue mb-4" />,
    title: 'Documentation & Support',
    price: 'Starting at ₹299',
    description: 'Project documentation, deployment support, and maintenance plans to keep your product reliable and transferable.',
  },
];

const Services: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-4">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-neon-blue mx-auto mb-4 rounded"></div>
        <p className="text-center text-slate max-w-2xl mx-auto mb-8">
          Web development, MVPs, dashboards, and documentation for businesses, startups and students — from concept to deployment and support.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-dark-navy/50 border border-dark-slate rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-neon-blue/20 hover:border-neon-blue/50 flex flex-col">
              {service.icon}
              <h3 className="text-xl font-bold text-light-slate mb-2">{service.title}</h3>
              <p className="text-neon-blue font-semibold mb-3">{service.price}</p>
              <p className="text-slate flex-grow mb-6">{service.description}</p>
              <a href="#contact" className="mt-auto bg-dark-slate hover:bg-neon-blue hover:text-dark-navy text-light-slate font-bold py-2 px-4 rounded transition-colors duration-300">
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;