import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, CodeIcon, TargetIcon } from './Icons';
import profileImg from '../assets/images/profile1.jpeg';

interface SectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const About: React.FC<SectionProps> = ({ sectionRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 md:py-32 bg-transparent transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                <CodeIcon className="w-12 h-12 text-neon-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-4">
                About DevHub Bardoli
            </h2>
            <div className="w-20 h-1 bg-neon-blue mx-auto mb-12 rounded"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-slate rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={profileImg}
            alt="Parikshit Chauhan, founder of DevHub Bardoli"
            className="relative rounded-lg shadow-xl w-full h-auto object-cover"
          />
                </div>
                <div className="space-y-6 text-lg text-slate text-left">
                    <div>
                        <p>
                        DevHub Bardoli was founded by <span className="font-medium text-syntax-orange">Parikshit Chauhan</span>, a full-stack developer building fast, maintainable websites, web apps, and dashboards for businesses, startups, and students.
                        </p>
                        <p>
                        We deliver custom digital products — idea, design, backend, deployment and support — helping local businesses reach customers, startups launch MVPs, and students build production-ready projects.
                        </p>
                        <p>
                        Our mission: make professional web development and practical digital tools accessible across Bardoli.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="pt-6 border-t border-dark-slate/50">
                        <div className="flex items-center gap-3 mb-3">
                            <TargetIcon className="w-7 h-7 text-neon-blue" />
                            <h3 className="text-2xl font-bold text-light-slate">My Vision</h3>
                        </div>
            <p className="text-slate">
              My vision is to bridge academic learning and local business needs by enabling practical digital innovation across Bardoli.
            </p>
            <p className="text-slate">
              I build reliable web products that improve visibility, customer reach, and operations — empowering individuals and businesses to go online with confidence.
            </p>
                    </div>

                    <div className="flex justify-start space-x-6 pt-2">
                        <a href="https://github.com/kshit7897" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
                        <GitHubIcon className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/parikshit-chauhan-245056242" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
                        <LinkedInIcon className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/devhubbardoli?utm_source=qr&igsh=MWdkNGN1dGtwb3hqeg==" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-neon-blue transition-all duration-300 transform hover:scale-110 inline-block">
                        <InstagramIcon className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;